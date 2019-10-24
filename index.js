/**
 * Constructs a base url response.
 * Response shall be used for indicating version of deployed service.
 *
 * @param pkgJsonPath Path to 'packet.json' containing version information.
 * @returns {{jsonapi: {meta: {owner: *, apiVersion: integer, build: *, service: *, description: *}, version: string}}}
 */

function fetchPkgJsonData(pkgJsonPath, apiVersion = 1) {

  const pkgJson = require(pkgJsonPath);

  return {
    jsonapi: {
      version: '1.0',
      meta: {
        apiVersion: apiVersion,
        build: pkgJson.version,
        service: pkgJson.name,
        owner: pkgJson.owner,
        description: pkgJson.description
      }
    }
  };
}

module.exports = fetchPkgJsonData;
