# test_imports.py
print("Testing imports and basic functionality...")

# Testing docx2txt
try:
    import docx2txt
    print("✓ docx2txt imported successfully")
    print("  docx2txt version:", docx2txt.__version__ if hasattr(docx2txt, '__version__') else "version not available")
except ImportError:
    print("✗ docx2txt import failed")

# Testing NLTK with better error handling
try:
    import nltk
    from nltk.tokenize import word_tokenize
    print("✓ nltk imported successfully")
    
    # Check if we have the required NLTK data
    try:
        test_sentence = "This is a test sentence for NLTK."
        tokens = word_tokenize(test_sentence)
        print("  NLTK sample tokenization:", tokens)
    except LookupError as e:
        print("  ⚠️ NLTK data not found. Please run setup_nltk.py first")
        print("  Error details:", str(e))
except ImportError:
    print("✗ nltk import failed")

# Testing pandas
try:
    import pandas as pd
    print("✓ pandas imported successfully")
    # Create a simple DataFrame to test pandas
    test_data = {'Column1': [1, 2, 3], 'Column2': ['A', 'B', 'C']}
    df = pd.DataFrame(test_data)
    print("  pandas DataFrame sample:")
    print(df)
except ImportError:
    print("✗ pandas import failed")