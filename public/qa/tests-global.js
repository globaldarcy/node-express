/**
 * Created by Shawn on 2017/4/27.
 */
suite('Global Tests', function () {
  test('页面有一个有效的标题', function () {
    assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
  });
});