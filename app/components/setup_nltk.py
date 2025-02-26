# setup_nltk.py
import nltk
import ssl

try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    pass
else:
    ssl._create_default_https_context = _create_unverified_https_context

print("Starting NLTK data download...")
try:
    print("Downloading 'punkt' package...")
    nltk.download('punkt', quiet=False)
    print("Download complete!")
    
    # Verify the download
    from nltk.tokenize import word_tokenize
    test_sentence = "Testing the installation."
    tokens = word_tokenize(test_sentence)
    print("\nTest tokenization successful:", tokens)
    print("\nAll NLTK setup completed successfully!")
except Exception as e:
    print(f"An error occurred during setup: {str(e)}")