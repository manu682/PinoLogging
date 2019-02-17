# PinoLogging
A sample node program that shows the capabilities of the Pino Logging library for audit logging and personal information logging.

Output from the sample program:

PS C:\PinoLogging> node .\index.js

{"level":"info","time":1550407076964,"msg":"hello world","v":1}

{"level":"info","time":1550407076964,"msg":"hello world",**"userid":"1234"**,"v":1}

{"level":"info","time":1550407076964,"msg":"hello child!",**"tag":"AUDIT_LOG"**,"v":1}

{"level":"info","time":1550407076964,"msg":"hello child!",**"tag":"AUDIT_LOG","userid":"1234"**,"v":1}
