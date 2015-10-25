Tinytest.add("SimpleMDE - correct export", function(test) {
	// Simply check 'SimpleMDE' is not undefined...
  test.isNotUndefined(SimpleMDE, "SimpleMDE doesn't seem to be correctly exported");

  // Simply check 'SimpleMDE.toolbar' is not undefined...
  test.isNotUndefined(SimpleMDE.toolbar, "SimpleMDE toolbar doesn't seem to be defined");
});
