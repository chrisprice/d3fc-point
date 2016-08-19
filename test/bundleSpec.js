import jsdom from 'jsdom';

describe('bundle', function() {
    it('should correctly wire-up all the dependencies via their UMD-exposed globals', function(done) {
        jsdom.env({
            html: '<html></html>',
            virtualConsole: jsdom.createVirtualConsole().sendTo(console),
            scripts: [
                './node_modules/d3-dispatch/build/d3-dispatch.js',
                './node_modules/d3-selection/build/d3-selection.js',
                './node_modules/d3fc-rebind/build/d3fc-rebind.js',
                './build/d3fc-data-join.js'
            ],
            done: (_, win) => {
                const point = win.fc.point();
                const selection = win.d3.select(win.document);
                selection.call(point);
                done();
            }
        });
    });
});
