'use strict';

/**
 * article-listing service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article-listing.article-listing');
