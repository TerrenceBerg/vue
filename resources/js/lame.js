/**
 * Minified by jsDelivr using Terser v5.9.0.
 * Original file: /npm/lamejs@1.2.1/src/js/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var common=require("./common.js"),System=common.System,VbrMode=common.VbrMode,Float=common.Float,ShortBlock=common.ShortBlock,Util=common.Util,Arrays=common.Arrays,new_array_n=common.new_array_n,new_byte=common.new_byte,new_double=common.new_double,new_float=common.new_float,new_float_n=common.new_float_n,new_int=common.new_int,new_int_n=common.new_int_n,assert=common.assert,Lame=require("./Lame.js"),Presets=require("./Presets.js"),GainAnalysis=require("./GainAnalysis.js"),QuantizePVT=require("./QuantizePVT.js"),Quantize=require("./Quantize.js"),Takehiro=require("./Takehiro.js"),Reservoir=require("./Reservoir.js"),MPEGMode=require("./MPEGMode.js"),BitStream=require("./BitStream.js"),Encoder=require("./Encoder.js"),Version=require("./Version.js"),VBRTag=require("./VBRTag.js");function GetAudio(){this.setModules=function(e,n){e,n}}function Parse(){this.setModules=function(e,n,t){e,n,t}}function MPGLib(){}function ID3Tag(){this.setModules=function(e,n){e,n}}function Mp3Encoder(e,n,t){3!=arguments.length&&(console.error("WARN: Mp3Encoder(channels, samplerate, kbps) not specified"),e=1,n=44100,t=128);var r=new Lame,a=new GetAudio,o=new GainAnalysis,s=new BitStream,i=new Presets,u=new QuantizePVT,d=new Quantize,c=new VBRTag,m=new Version,l=new ID3Tag,f=new Reservoir,w=new Takehiro,_=new Parse,h=new MPGLib;r.setModules(o,s,i,u,d,c,m,l,h),s.setModules(o,h,m,c),l.setModules(s,m),i.setModules(r),d.setModules(s,f,u,w),u.setModules(w,f,r.enc.psy),f.setModules(s),w.setModules(u),c.setModules(r,s,m),a.setModules(_,h),_.setModules(m,l,i);var M=r.lame_init();M.num_channels=e,M.in_samplerate=n,M.brate=t,M.mode=MPEGMode.STEREO,M.quality=3,M.bWriteVbrTag=!1,M.disable_reservoir=!0,M.write_id3tag_automatic=!1;var v=r.lame_init_params(M);assert(0==v);var g=1152,b=0|1.25*g+7200,y=new_byte(b);this.encodeBuffer=function(n,t){1==e&&(t=n),assert(n.length==t.length),n.length>g&&(g=n.length,y=new_byte(b=0|1.25*g+7200));var a=r.lame_encode_buffer(M,n,t,n.length,y,0,b);return new Int8Array(y.subarray(0,a))},this.flush=function(){var e=r.lame_encode_flush(M,y,0,b);return new Int8Array(y.subarray(0,e))}}function WavHeader(){this.dataOffset=0,this.dataLen=0,this.channels=0,this.sampleRate=0}function fourccToInt(e){return e.charCodeAt(0)<<24|e.charCodeAt(1)<<16|e.charCodeAt(2)<<8|e.charCodeAt(3)}WavHeader.RIFF=fourccToInt("RIFF"),WavHeader.WAVE=fourccToInt("WAVE"),WavHeader.fmt_=fourccToInt("fmt "),WavHeader.data=fourccToInt("data"),WavHeader.readHeader=function(e){var n=new WavHeader,t=e.getUint32(0,!1);if(WavHeader.RIFF==t){e.getUint32(4,!0);if(WavHeader.WAVE==e.getUint32(8,!1)&&WavHeader.fmt_==e.getUint32(12,!1)){var r=e.getUint32(16,!0),a=20;switch(r){case 16:case 18:n.channels=e.getUint16(a+2,!0),n.sampleRate=e.getUint32(a+4,!0);break;default:throw"extended fmt chunk not implemented"}a+=r;for(var o=WavHeader.data,s=0;o!=t&&(t=e.getUint32(a,!1),s=e.getUint32(a+4,!0),o!=t);)a+=s+8;return n.dataLen=s,n.dataOffset=a+8,n}}},module.exports.Mp3Encoder=Mp3Encoder,module.exports.WavHeader=WavHeader;
//# sourceMappingURL=/sm/d9fcf43949eb67fd3191029a2d4500a9c0779c501f676d07027c67179a34b7ff.map
