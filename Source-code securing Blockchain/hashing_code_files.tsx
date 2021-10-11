function genHash(db, collection, query, projection) {
    log('Generating hash for ', collection, query, projection);
    const algo = 'sha256';
    const shasum = crypto.createHash(algo);
  
    const queryData = {
      databaseName: db.databaseName,
      collection,
      query,
      projection
    };
  
    const cursor = db
      .collection(collection)
      .find(JSON.parse(query));
  
    if (projection !== 'undefined') {
      cursor.project(JSON.parse(projection));
    }
    hash = new Promise((resolve, reject) => {
      shasum.update(stringify(queryData));
      cursor.forEach((doc) => {
        shasum.update(JSON.stringify(doc));
      }, (err) => {
        if (err === null) {
          const thisHash = shasum.digest('hex');
          log('hash= ' + thisHash);
          resolve(thisHash);
        } else {
          reject(err);
        }
      });
    });
    return (hash);
  }


//   Points to be Remember While doing hashing 
//   Query data must be same
//   import necessary modules like JSON, cryptography ...and so. when using as individual