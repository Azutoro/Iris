const config = require("../config");
const commands = [];

/**
 * Define a command and store it in the commands array.
 * @param {Object} commandInfo - Information about the command.
 * @param {Function} func - The function to execute when the command is triggered.
 * @returns {Object} - The command information.
 */
function rudhra(commandInfo, func) {
	commandInfo.function = func;
	if (commandInfo.pattern) {
		commandInfo.originalPattern = commandInfo.pattern;
		commandInfo.pattern = new RegExp(
         `(${config.HANDLERS})( ?${commandInfo.pattern}(?=\\b|$))(.*)`,
         "is"
          ) || false;
        }
	commandInfo.dontAddCommandList = commandInfo.dontAddCommandList || false;
	commandInfo.fromMe = commandInfo.fromMe || false;
	commandInfo.type = commandInfo.type || "misc";

	commands.push(commandInfo);
	return commandInfo;
}

module.exports = {
	rudhra,
	mode: config.WORK_TYPE.toLowerCase() === "public",
	commands,
};
