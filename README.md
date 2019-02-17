# PinoLogging
A sample node program that shows the capabilities of the Pino Logging library for audit logging and personal information logging.

*Output from the sample program:*
```
PS C:\PinoLogging> node .\index.js
// Printing a regular log
{"level":"info","time":1550407076964,"msg":"hello world","v":1}

// Printing personal information with a regular Log
{"level":"info","time":1550407076964,"msg":"hello world","userid":"1234","v":1}

// Printing AUDIT LOG information with a separate logger
{"level":"info","time":1550407076964,"msg":"hello child!","tag":"AUDIT_LOG","v":1}

// Printing AUDIT LOG information with a regular log and personal information
{"level":"info","time":1550407076964,"msg":"hello child!","tag":"AUDIT_LOG","userid":"1234","v":1}
```
