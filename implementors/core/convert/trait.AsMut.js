(function() {var implementors = {
"drm":[["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"drm/control/dumbbuffer/struct.DumbMapping.html\" title=\"struct drm::control::dumbbuffer::DumbMapping\">DumbMapping</a>&lt;'a&gt;"]],
"nix":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;timespec&gt; for <a class=\"struct\" href=\"nix/sys/time/struct.TimeSpec.html\" title=\"struct nix::sys::time::TimeSpec\">TimeSpec</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;timeval&gt; for <a class=\"struct\" href=\"nix/sys/time/struct.TimeVal.html\" title=\"struct nix::sys::time::TimeVal\">TimeVal</a>"]],
"smithay":[["impl&lt;'render, 'target, R:&nbsp;<a class=\"trait\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html\" title=\"trait smithay::backend::renderer::multigpu::GraphicsApi\">GraphicsApi</a>, T:&nbsp;<a class=\"trait\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html\" title=\"trait smithay::backend::renderer::multigpu::GraphicsApi\">GraphicsApi</a>, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;&lt;&lt;R as <a class=\"trait\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html\" title=\"trait smithay::backend::renderer::multigpu::GraphicsApi\">GraphicsApi</a>&gt;::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html#associatedtype.Device\" title=\"type smithay::backend::renderer::multigpu::GraphicsApi::Device\">Device</a> as <a class=\"trait\" href=\"smithay/backend/renderer/multigpu/trait.ApiDevice.html\" title=\"trait smithay::backend::renderer::multigpu::ApiDevice\">ApiDevice</a>&gt;::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.ApiDevice.html#associatedtype.Renderer\" title=\"type smithay::backend::renderer::multigpu::ApiDevice::Renderer\">Renderer</a>&gt; for <a class=\"struct\" href=\"smithay/backend/renderer/multigpu/struct.MultiRenderer.html\" title=\"struct smithay::backend::renderer::multigpu::MultiRenderer\">MultiRenderer</a>&lt;'render, 'target, R, T, Target&gt;"],["impl&lt;'render, 'target, 'frame, R:&nbsp;<a class=\"trait\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html\" title=\"trait smithay::backend::renderer::multigpu::GraphicsApi\">GraphicsApi</a>, T:&nbsp;<a class=\"trait\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html\" title=\"trait smithay::backend::renderer::multigpu::GraphicsApi\">GraphicsApi</a>, Target&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;&lt;&lt;&lt;R as <a class=\"trait\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html\" title=\"trait smithay::backend::renderer::multigpu::GraphicsApi\">GraphicsApi</a>&gt;::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html#associatedtype.Device\" title=\"type smithay::backend::renderer::multigpu::GraphicsApi::Device\">Device</a> as <a class=\"trait\" href=\"smithay/backend/renderer/multigpu/trait.ApiDevice.html\" title=\"trait smithay::backend::renderer::multigpu::ApiDevice\">ApiDevice</a>&gt;::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.ApiDevice.html#associatedtype.Renderer\" title=\"type smithay::backend::renderer::multigpu::ApiDevice::Renderer\">Renderer</a> as <a class=\"trait\" href=\"smithay/backend/renderer/trait.Renderer.html\" title=\"trait smithay::backend::renderer::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"smithay/backend/renderer/trait.Renderer.html#associatedtype.Frame\" title=\"type smithay::backend::renderer::Renderer::Frame\">Frame</a>&lt;'frame&gt;&gt; for <a class=\"struct\" href=\"smithay/backend/renderer/multigpu/struct.MultiFrame.html\" title=\"struct smithay::backend::renderer::multigpu::MultiFrame\">MultiFrame</a>&lt;'render, 'target, 'frame, R, T, Target&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;R::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html#associatedtype.Error\" title=\"type smithay::backend::renderer::multigpu::GraphicsApi::Error\">Error</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;T::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html#associatedtype.Error\" title=\"type smithay::backend::renderer::multigpu::GraphicsApi::Error\">Error</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;R::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html#associatedtype.Device\" title=\"type smithay::backend::renderer::multigpu::GraphicsApi::Device\">Device</a> as <a class=\"trait\" href=\"smithay/backend/renderer/multigpu/trait.ApiDevice.html\" title=\"trait smithay::backend::renderer::multigpu::ApiDevice\">ApiDevice</a>&gt;::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.ApiDevice.html#associatedtype.Renderer\" title=\"type smithay::backend::renderer::multigpu::ApiDevice::Renderer\">Renderer</a>: <a class=\"trait\" href=\"smithay/backend/renderer/trait.Offscreen.html\" title=\"trait smithay::backend::renderer::Offscreen\">Offscreen</a>&lt;Target&gt; + <a class=\"trait\" href=\"smithay/backend/renderer/trait.ExportDma.html\" title=\"trait smithay::backend::renderer::ExportDma\">ExportDma</a> + <a class=\"trait\" href=\"smithay/backend/renderer/trait.ExportMem.html\" title=\"trait smithay::backend::renderer::ExportMem\">ExportMem</a> + <a class=\"trait\" href=\"smithay/backend/renderer/trait.ImportDma.html\" title=\"trait smithay::backend::renderer::ImportDma\">ImportDma</a> + <a class=\"trait\" href=\"smithay/backend/renderer/trait.ImportMem.html\" title=\"trait smithay::backend::renderer::ImportMem\">ImportMem</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html#associatedtype.Device\" title=\"type smithay::backend::renderer::multigpu::GraphicsApi::Device\">Device</a> as <a class=\"trait\" href=\"smithay/backend/renderer/multigpu/trait.ApiDevice.html\" title=\"trait smithay::backend::renderer::multigpu::ApiDevice\">ApiDevice</a>&gt;::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.ApiDevice.html#associatedtype.Renderer\" title=\"type smithay::backend::renderer::multigpu::ApiDevice::Renderer\">Renderer</a>: <a class=\"trait\" href=\"smithay/backend/renderer/trait.ImportDma.html\" title=\"trait smithay::backend::renderer::ImportDma\">ImportDma</a> + <a class=\"trait\" href=\"smithay/backend/renderer/trait.ImportMem.html\" title=\"trait smithay::backend::renderer::ImportMem\">ImportMem</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;R::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html#associatedtype.Device\" title=\"type smithay::backend::renderer::multigpu::GraphicsApi::Device\">Device</a> as <a class=\"trait\" href=\"smithay/backend/renderer/multigpu/trait.ApiDevice.html\" title=\"trait smithay::backend::renderer::multigpu::ApiDevice\">ApiDevice</a>&gt;::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.ApiDevice.html#associatedtype.Renderer\" title=\"type smithay::backend::renderer::multigpu::ApiDevice::Renderer\">Renderer</a> as <a class=\"trait\" href=\"smithay/backend/renderer/trait.Renderer.html\" title=\"trait smithay::backend::renderer::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"smithay/backend/renderer/trait.Renderer.html#associatedtype.Error\" title=\"type smithay::backend::renderer::Renderer::Error\">Error</a>: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;&lt;T::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.GraphicsApi.html#associatedtype.Device\" title=\"type smithay::backend::renderer::multigpu::GraphicsApi::Device\">Device</a> as <a class=\"trait\" href=\"smithay/backend/renderer/multigpu/trait.ApiDevice.html\" title=\"trait smithay::backend::renderer::multigpu::ApiDevice\">ApiDevice</a>&gt;::<a class=\"associatedtype\" href=\"smithay/backend/renderer/multigpu/trait.ApiDevice.html#associatedtype.Renderer\" title=\"type smithay::backend::renderer::multigpu::ApiDevice::Renderer\">Renderer</a> as <a class=\"trait\" href=\"smithay/backend/renderer/trait.Renderer.html\" title=\"trait smithay::backend::renderer::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"smithay/backend/renderer/trait.Renderer.html#associatedtype.Error\" title=\"type smithay::backend::renderer::Renderer::Error\">Error</a>: 'static,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()