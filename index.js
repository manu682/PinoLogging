const logger = require('pino')({
  level: 'info',
  useLevelLabels: true,
  base: null
});
const auditLogger = logger.child({ tag: 'AUDIT_LOG' });

// Printing a regular log
logger.info('hello world');

// Printing personal information with a regular Log
logger.info({ userid: '1234' }, 'hello world');

// Printing AUDIT LOG information with a separate logger
auditLogger.info('hello child!');

// Printing AUDIT LOG information with a regular log and personal information
auditLogger.info({ userid: '1234' }, 'hello child!');
