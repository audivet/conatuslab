# mini_analyzer.py
from pathlib import Path

def main():
    print("Mini analyzer starting...")
    
    # Get the file path
    file_path = 'sample_contract.txt'
    print(f"Reading file: {file_path}")
    
    # Check if file exists
    if not Path(file_path).exists():
        print(f"Error: File not found: {file_path}")
        return
    
    # Read the file
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Print basic info
    print(f"File successfully read. Content length: {len(content)} characters")
    print(f"First 50 characters: {content[:50]}")
    
    # Count words
    words = content.split()
    print(f"Word count: {len(words)}")

if __name__ == "__main__":
    main()