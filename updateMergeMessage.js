/**
 * Replaces the default merge commit message with the one provided
 * @param {string} message          The merge commit message
 * @param {number} prNumber         The Pull Request Number
 * @param {string} prDescription    The Pull Request details
 */
function updateMergeMessage(message, prNumber, prDescription) {
    const logger = getLogger('updateMergeMessage()');

    if (!message || !prNumber) {
        logger.error('FAILED to update PR Merge Commit Message. No message param provided to updateMessage().');
    }

    const prCommitMessage = document.getElementById('commit-message');
    if (!prCommitMessage) {
        logger.error('FAILED to update PR Merge Commit Message. Could not find "commit-message" element.');
        return;
    }

    const prNumberDesc = prNumber ? ` (PR #${prNumber})` : '';
    const commitMessageHeading = `${message}${prNumberDesc}`;
    const commitMessageBody = prDescription ? `\n\n${prDescription}` : '';
    const commitMessage = `${commitMessageHeading}${commitMessageBody}`;

    logger.info('PR Merge Commit Message changed from "', prCommitMessage.textContent, '" to:', commitMessage);

    prCommitMessage.textContent = commitMessage;

    // update the 'data-original-value' attribute too so that canceling the merge dialog
    // and re-opening it won't switch the merge message back to the default message.
    prCommitMessage.setAttribute('data-original-value', commitMessage);
}
