/**
 * Created by Shawn on 2017/4/27.
 */
suite('"About" Page Tests', function () {
  test('page should contain link to contact page', function () {
    assert($('a[href="/contact"]').length);
  });
});