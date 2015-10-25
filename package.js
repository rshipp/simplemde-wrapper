Package.describe({
  name: 'nextwebsteps:simplemde',
  summary: 'SimpleMDE: A simple, beautiful, and embeddable JavaScript Markdown editor',
  version: '1.8.0',
  git: 'https://github.com/MeteorPackaging/simplemde-wrapper.git'
});

Package.onUse(function(api) {

  api.addFiles([
    'upstream/simplemde.min.js',
  ], 'client');

  api.addAssets([
    'upstream/simplemde.min.css',
  ], 'client');
});

Package.on_test(function(api) {
  api.use('nextwebsteps:simplemde');

  api.use([
    'tinytest',
    'test-helpers'
  ], ['client']);

  api.add_files([
    'tests/tests.js',
  ], ['client']);
});
