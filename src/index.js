/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
var b = []; 
var count = 0; 
var k1 = 0, k2 = 0, k3 = 0; 
for (var i = 0; i < preferences.length; i++) { 
  if (b.indexOf(preferences[i]) == -1) { 
    k1 = preferences[i]; 
    if (preferences[k1-1] !== undefined && preferences[k1-1] != preferences[i]) { 
      k2 = preferences[k1-1]; 
      if (preferences[k2-1] !== undefined) { 
        k3 = preferences[k2-1]; 
        if ( preferences[k3-1] == k1) { 
          b.push(k1); 
          b.push(k2); 
          b.push(k3); 
          k1 = 0; k2 = 0; k3 = 0; 
          count++; 
        } 
      } 
    } 
  } 
} 
return count;
};
