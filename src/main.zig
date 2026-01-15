const std = @import("std");
const webui = @import("webui");

const hehe = @embedFile("index.html");

pub fn main() !void {
	const win = webui.newWindow();

	_ = try win.showBrowser(hehe, .Chromium);

	webui.wait();
	webui.clean();
}
