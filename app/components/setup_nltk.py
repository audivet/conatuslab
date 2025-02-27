# setup_nltk.py
print("Checking Python environment...")
import sys
print(f"Using Python from: {sys.executable}")

print("\nSetting up NLTK components...")
import nltk

# Define all the components we need
required_packages = [
    'punkt',
    'averaged_perceptron_tagger',
    'maxent_ne_chunker',
    'words'
]

# Download each component with proper error handling
for package in required_packages:
    print(f"\nDownloading '{package}'...")
    try:
        nltk.download(package, quiet=False)
        print(f"Successfully downloaded {package}")
    except Exception as e:
        print(f"Error downloading {package}: {str(e)}")

print("\nTesting basic NLTK functionality...")
try:
    from nltk.tokenize import word_tokenize
    test_sentence = "Testing NLTK installation with a simple sentence."
    tokens = word_tokenize(test_sentence)
    print("\nTokenization test successful!")
    print("Sample output:", tokens)
except Exception as e:
    print(f"Test failed with error: {str(e)}")