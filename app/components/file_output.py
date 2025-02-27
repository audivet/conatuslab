# file_output.py
from pathlib import Path

def main():
    with open('debug_output.txt', 'w') as debug:
        debug.write("Starting analysis...\n")
        
        try:
            # Get the file path
            file_path = 'sample_contract.txt'
            debug.write(f"Reading file: {file_path}\n")
            
            # Check if file exists
            if not Path(file_path).exists():
                debug.write(f"Error: File not found: {file_path}\n")
                return
            
            # Read the file
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Write basic info
            debug.write(f"File successfully read. Content length: {len(content)} characters\n")
            debug.write(f"First 50 characters: {content[:50]}\n")
            
            # Count words
            words = content.split()
            debug.write(f"Word count: {len(words)}\n")
            
        except Exception as e:
            debug.write(f"Error occurred: {str(e)}\n")
            import traceback
            debug.write(traceback.format_exc())

if __name__ == "__main__":
    main()
    print("Finished execution, check debug_output.txt for results")