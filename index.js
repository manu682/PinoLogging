const logger = require('pino')({
  level: 'info',
  useLevelLabels: true,
  base: null
});
const auditLogger = logger.child({ tag: 'AUDIT_LOG' });

// Printing a regular log
logger.info('hello world');
// {"level":"info","time":1550407076964,"msg":"hello world","v":1}

// Printing personal information with a regular Log
logger.info({ userid: '1234' }, 'hello world');
// {"level":"info","time":1550407076964,"msg":"hello world","userid":"1234","v":1}

// Printing AUDIT LOG information with a separate logger
auditLogger.info('hello child!');
// {"level":"info","time":1550407076964,"msg":"hello child!","tag":"AUDIT_LOG","v":1}

// Printing AUDIT LOG information with a regular log and personal information
auditLogger.info({ userid: '1234' }, 'hello child!');
// {"level":"info","time":1550407076964,"msg":"hello child!","tag":"AUDIT_LOG","userid":"1234","v":1}
