import re
from pathlib import Path
from collections import Counter
import sys
import traceback

# Define flag for docx2txt availability
DOCX_AVAILABLE = False

# Try to import docx2txt
try:
    import docx2txt
    DOCX_AVAILABLE = True
except ImportError:
    print("Warning: docx2txt not available. DOCX processing disabled.")

class LegalDocumentAnalyzer:
    """A simplified class for analyzing legal documents."""
    
    def __init__(self):
        """Initialize the document analyzer."""
        pass
    
    def load_document(self, file_path):
        """Load a document from various file formats.
        
        Args:
            file_path (str): Path to the document file
            
        Returns:
            str: Extracted text from the document
        """
        file_path = Path(file_path)
        print(f"Checking if file exists: {file_path.exists()}")
        
        if not file_path.exists():
            raise FileNotFoundError(f"File not found: {file_path}")
            
        file_extension = file_path.suffix.lower()
        print(f"File extension: {file_extension}")
        
        if file_extension == '.docx' and DOCX_AVAILABLE:
            return self._extract_from_docx(file_path)
        elif file_extension == '.txt':
            return self._extract_from_txt(file_path)
        else:
            raise ValueError(f"Unsupported or unavailable file format: {file_extension}")
    
    def _extract_from_docx(self, file_path):
        """Extract text from a Word document."""
        try:
            return docx2txt.process(file_path)
        except Exception as e:
            print(f"Error extracting text from DOCX: {e}")
            return ""
    
    def _extract_from_txt(self, file_path):
        """Load text from a plain text file."""
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                text = file.read()
                print(f"Successfully read text file, length: {len(text)} characters")
                return text
        except UnicodeDecodeError:
            print("UTF-8 decoding failed, trying latin-1 encoding")
            # Try with different encoding if UTF-8 fails
            with open(file_path, 'r', encoding='latin-1') as file:
                text = file.read()
                print(f"Successfully read text file with latin-1 encoding, length: {len(text)} characters")
                return text
        except Exception as e:
            print(f"Error reading text file: {e}")
            traceback.print_exc()
            return ""
    
    def analyze_text(self, text):
        """Perform basic analysis on the document text.
        
        Args:
            text (str): Document text
            
        Returns:
            dict: Analysis results
        """
        print(f"Starting text analysis. Text length: {len(text)} characters")
        
        # Basic text statistics
        words = re.findall(r'\b\w+\b', text.lower())
        word_count = len(words)
        print(f"Found {word_count} words")
        
        # Simple sentence splitting
        sentences = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?|\!)\s', text)
        sentence_count = len(sentences)
        print(f"Found {sentence_count} sentences")
        
        # Calculate paragraphs
        paragraphs = re.split(r'\n\s*\n', text)
        paragraph_count = len(paragraphs)
        print(f"Found {paragraph_count} paragraphs")
        
        # Word frequency
        word_freq = Counter(words)
        common_words = word_freq.most_common(20)
        print(f"Calculated word frequencies")
        
        # Extract potential legal entities
        print("Extracting legal entities...")
        entities = self._extract_legal_entities(text)
        
        # Identify document type
        print("Identifying document type...")
        doc_type = self._identify_document_type(text)
        print(f"Document type identified as: {doc_type}")
        
        # Combine results
        return {
            "document_stats": {
                "word_count": word_count,
                "sentence_count": sentence_count,
                "paragraph_count": paragraph_count,
                "average_words_per_sentence": word_count / sentence_count if sentence_count > 0 else 0
            },
            "document_type": doc_type,
            "entities": entities,
            "common_words": common_words
        }
    
    def _identify_document_type(self, text):
        """Identify the type of legal document based on content."""
        # Define patterns and keywords for different document types
        document_types = {
            'contract': ['agreement', 'between the parties', 'terms and conditions', 
                        'hereby agrees', 'obligations', 'in witness whereof'],
            'court_filing': ['court', 'plaintiff', 'defendant', 'case no', 
                            'motion', 'petition', 'complaint', 'brief'],
            'judicial_opinion': ['opinion', 'court holds', 'we affirm', 
                                'we reverse', 'judgment', 'appellant', 'appellee'],
            'legislation': ['act', 'statute', 'section', 'subsection', 
                           'public law', 'be it enacted'],
            'legal_memo': ['memorandum', 'to:', 'from:', 're:', 
                          'issue', 'brief answer', 'analysis']
        }
        
        # Count matches for each document type
        scores = {}
        for doc_type, keywords in document_types.items():
            scores[doc_type] = sum(keyword.lower() in text.lower() for keyword in keywords)
        
        # Return the document type with the highest score
        if max(scores.values()) > 0:
            return max(scores, key=scores.get)
        else:
            return "unknown"
    
    def _extract_legal_entities(self, text):
        """Extract common legal entities from the document."""
        entities = {
            'parties': self._extract_parties(text),
            'dates': self._extract_dates(text),
            'monetary_amounts': self._extract_monetary_amounts(text),
            'defined_terms': self._extract_defined_terms(text)
        }
        
        return entities
    
    def _extract_parties(self, text):
        """Extract potential parties from legal text."""
        parties = []
        
        # Common patterns for identifying parties in contracts
        party_patterns = [
            r'(?:between|among)\s+([A-Z][A-Za-z\s,]+)(?:,|and)\s+([A-Z][A-Za-z\s,]+)',
            r'(?:THIS AGREEMENT|CONTRACT) made (?:and entered )?(?:into )?(?:by and )?between ([A-Z][A-Za-z\s,]+) and ([A-Z][A-Za-z\s,]+)',
            r'(?:PLAINTIFF|Plaintiff)(?:s)?:?\s+([A-Z][A-Za-z\s,]+)',
            r'(?:DEFENDANT|Defendant)(?:s)?:?\s+([A-Z][A-Za-z\s,]+)'
        ]
        
        # Search for each pattern
        for pattern in party_patterns:
            matches = re.findall(pattern, text[:3000])  # Check first 3000 chars for efficiency
            for match in matches:
                if isinstance(match, tuple):
                    for party in match:
                        # Clean up the party name
                        clean_party = re.sub(r'[,]?\s*(?:a|an)\s+.+', '', party).strip()
                        if clean_party and clean_party not in parties:
                            parties.append(clean_party)
                else:
                    clean_party = re.sub(r'[,]?\s*(?:a|an)\s+.+', '', match).strip()
                    if clean_party and clean_party not in parties:
                        parties.append(clean_party)
        
        return parties
    
    def _extract_dates(self, text):
        """Extract dates from legal text."""
        date_patterns = [
            r'\b(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\b',
            r'\b\d{1,2}/\d{1,2}/\d{4}\b',
            r'\b\d{4}-\d{2}-\d{2}\b'
        ]
        
        dates = []
        for pattern in date_patterns:
            matches = re.findall(pattern, text)
            dates.extend(matches)
        
        return dates
    
    def _extract_monetary_amounts(self, text):
        """Extract monetary amounts from legal text."""
        money_patterns = [
            r'\$\s*\d{1,3}(?:,\d{3})*(?:\.\d{2})?',
            r'(?:USD|US Dollars|United States Dollars) \d{1,3}(?:,\d{3})*(?:\.\d{2})?'
        ]
        
        amounts = []
        for pattern in money_patterns:
            matches = re.findall(pattern, text)
            amounts.extend(matches)
        
        return amounts
    
    def _extract_defined_terms(self, text):
        """Extract defined terms from legal text."""
        definitions = {}
        
        # Pattern for terms defined in quotes
        quoted_def_pattern = r'"([^"]+)"\s+(?:means|shall mean|refers to)\s+([^.]+)'
        quoted_matches = re.findall(quoted_def_pattern, text)
        for term, definition in quoted_matches:
            definitions[term.strip()] = definition.strip()
        
        # Pattern for capitalized defined terms
        caps_def_pattern = r'([A-Z][A-Z\s]+)\s+(?:means|shall mean|refers to)\s+([^.]+)'
        caps_matches = re.findall(caps_def_pattern, text)
        for term, definition in caps_matches:
            definitions[term.strip()] = definition.strip()
        
        return definitions
    
    def generate_report(self, analysis_results):
        """Generate a formatted report of the analysis results.
        
        Args:
            analysis_results (dict): Results from analyze_text
            
        Returns:
            str: Formatted report
        """
        report = []
        
        # Document Information
        report.append("LEGAL DOCUMENT ANALYSIS REPORT")
        report.append("=" * 30)
        report.append(f"Document Type: {analysis_results['document_type']}")
        stats = analysis_results['document_stats']
        report.append(f"Word Count: {stats['word_count']}")
        report.append(f"Sentence Count: {stats['sentence_count']}")
        report.append(f"Paragraph Count: {stats['paragraph_count']}")
        report.append(f"Average Words Per Sentence: {stats['average_words_per_sentence']:.1f}")
        report.append("")
        
        # Entities
        report.append("LEGAL ENTITIES")
        report.append("-" * 20)
        
        # Parties
        if analysis_results['entities']['parties']:
            report.append("Parties:")
            for party in analysis_results['entities']['parties'][:10]:
                report.append(f"- {party}")
            if len(analysis_results['entities']['parties']) > 10:
                report.append(f"  ... and {len(analysis_results['entities']['parties']) - 10} more")
            report.append("")
        
        # Dates
        if analysis_results['entities']['dates']:
            report.append("Key Dates:")
            for date in analysis_results['entities']['dates'][:10]:
                report.append(f"- {date}")
            if len(analysis_results['entities']['dates']) > 10:
                report.append(f"  ... and {len(analysis_results['entities']['dates']) - 10} more")
            report.append("")
        
        # Monetary Amounts
        if analysis_results['entities']['monetary_amounts']:
            report.append("Monetary Amounts:")
            for amount in analysis_results['entities']['monetary_amounts'][:10]:
                report.append(f"- {amount}")
            if len(analysis_results['entities']['monetary_amounts']) > 10:
                report.append(f"  ... and {len(analysis_results['entities']['monetary_amounts']) - 10} more")
            report.append("")
        
        # Defined Terms
        if analysis_results['entities']['defined_terms']:
            report.append("Defined Terms:")
            terms = list(analysis_results['entities']['defined_terms'].items())[:10]
            for term, definition in terms:
                short_def = definition[:50] + '...' if len(definition) > 50 else definition
                report.append(f"- {term}: {short_def}")
            if len(analysis_results['entities']['defined_terms']) > 10:
                report.append(f"  ... and {len(analysis_results['entities']['defined_terms']) - 10} more terms")
            report.append("")
        
        # Common Words
        report.append("COMMON WORDS")
        report.append("-" * 20)
        for word, count in analysis_results['common_words'][:20]:
            report.append(f"{word}: {count}")
        
        return "\n".join(report)

if __name__ == "__main__":
    print(f"Current working directory: {Path.cwd()}")
    
    try:
        if len(sys.argv) < 2:
            print("Usage: python legal_document_analyzer.py <path_to_document>")
            sys.exit(1)
            
        file_path = sys.argv[1]
        print(f"Looking for file: {file_path}")
        print(f"File exists: {Path(file_path).exists()}")
        
        # Load the document
        print(f"Loading document: {file_path}")
        analyzer = LegalDocumentAnalyzer()
        
        try:
            text = analyzer.load_document(file_path)
            print(f"Successfully loaded document. Text length: {len(text)} characters")
            
            # Analyze the text
            print("Analyzing document...")
            analysis = analyzer.analyze_text(text)
            
            # Generate and print the report
            print("\n" + "=" * 50 + "\n")
            report = analyzer.generate_report(analysis)
            print(report)
            
        except Exception as e:
            print(f"Error processing document: {e}")
            traceback.print_exc()
            sys.exit(1)
            
    except Exception as e:
        print(f"Unexpected error: {e}")
        traceback.print_exc()
        sys.exit(1)