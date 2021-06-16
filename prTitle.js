/**
 * Finds the title for the Pull Request
 * @returns {string|null}
 */
function getPullRequestTitle() {
    const logger = getLogger('getPullRequestTitle()');

    const prHeader = document.getElementById('pull-request-header');
    logger.info('prHeader=', prHeader);

    if (!prHeader) {
        logger.error('PR title (header) NOT found');
        return null;
    }

    const h2Collection = prHeader.getElementsByTagName('h2');
    const prTitle = h2Collection.length === 1 && h2Collection[0];
    logger.info('h2 collection.length = ', h2Collection.length, 'prTitle=', prTitle);

    if (!prTitle) {
        logger.error('PR title (h2) NOT found');
        return null;
    }

    logger.info('PR title found: ', prTitle.innerText);
    return prTitle.innerText;
}
