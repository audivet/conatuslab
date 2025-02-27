# simple_analyzer.py
import sys
from pathlib import Path

def main():
    print("Simple analyzer starting...")
    sys.stdout.flush()  # Force output to be displayed immediately
    
    try:
        if len(sys.argv) < 2:
            print("Error: No file specified")
            return
        
        file_path = sys.argv[1]
        print(f"Attempting to read file: {file_path}")
        sys.stdout.flush()
        
        if not Path(file_path).exists():
            print(f"Error: File does not exist: {file_path}")
            return
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print(f"Successfully read file. Content length: {len(content)}")
        print(f"First 50 characters: {content[:50]}")
        sys.stdout.flush()
        
        # Count words
        words = content.split()
        print(f"Total word count: {len(words)}")
        sys.stdout.flush()
        
    except Exception as e:
        print(f"Error occurred: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()