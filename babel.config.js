module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          "paths": [
            {
              "rootPathSuffix": "./src/core",
              "rootPathPrefix": "@/core"
            },
            {
              "rootPathSuffix": "./src/types",
              "rootPathPrefix": "@/types"
            },
            {
              "rootPathSuffix": "./src/colors",
              "rootPathPrefix": "@/colors"
            },
          ]
        }
      ]
    ],
  };
};
