# Relative Time
tiny-relative-time is a lightweightand versatile package to format dates and timestamps into human-friendly relative times. It works for both JavaScript and TypeScript and supports multiple formatting modes, including natural language and short compact format 

# ✨Features
  
• Format relative time in natural language:
• Compact formats 
• Multiple modes for flexibility

# 📦Installation 

Install the package using npm: 
```npm install tiny-relative-time```

# 🚀Usage 

relTime() works with Date objects, timestamps, or ISO strings. The second argument is one of "natural" | "minuteRounded" | "compact" | "compactMinute" modes. In TypeScript, you can optionally import the Mode type for type safety.

# 🗒️Modes 

1. natural: Standard natural language; 10 seconds ago 
2. minuteRounded: Rounds times to nearest minute; very recent times show "just now" 
3. compact: Short, concise format;  10s 
4. compactMinute: Short format with focus on minutes; less than 1 minute shows 0m

# ✔️Supported Input 

1.	Date object 
2.	Timestamp (number in milliseconds) 
3.	ISO string ("2026-03-03T12:00:00Z")

## ⚡JavaScript 
### Import the Package
```
const { relTime } = require('tiny-relative-time'); 
```
### Get relative time for different input
```
console.log(relTime(new Date(Date.now() - 10 * 1000), "natural"));
console.log(relTime(Date.now() - 10 * 1000, "minuteRounded"));
console.log(relTime(new Date(Date.now() - 10 * 1000).toISOString(), "compact"));
console.log(relTime(Date.now() - 10 * 1000, "compactMinute"))
```

## 🛡️TypeScript 
### Import the Package
```
import { relTime, Mode } from 'tiny-relative-time'; 
```
### Get relative time different input
```
const dateInput: Date = new Date(Date.now() - 10 * 1000); 
const timestampInput: number = Date.now() - 10 * 1000; 
const isoInput: string = new Date(Date.now() - 10 * 1000).toISOString(); 
const mode: Mode = "natural"; 
console.log(relTime(dateInput, mode));
console.log(relTime(timestampInput, "minuteRounded"));
console.log(relTime(isoInput, "compact")); 
console.log(relTime(timestampInput, "compactMinute"));
```
# 🤝Contributing 

Contributions are welcome! Feel free to open issues or submit pull requests on GitHub. 

# 📄License 

This project is licensed under the MIT License.