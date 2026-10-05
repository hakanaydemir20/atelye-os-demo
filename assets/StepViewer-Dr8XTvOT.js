import{r as Gt,j as Ot}from"./main-e-1-eNRO.js";import{g as dh,a as ph}from"./index-Dv5SoF2e.js";var fc={exports:{}};const mh={},_h=Object.freeze(Object.defineProperty({__proto__:null,default:mh},Symbol.toStringTag,{value:"Module"})),Vs=dh(_h);(function(i,e){var t=(()=>{var r;var n=typeof document<"u"?(r=document.currentScript)==null?void 0:r.src:void 0;return typeof __filename<"u"&&(n=n||__filename),function(a={}){var l,c=a,f,h,_=new Promise((s,o)=>{f=s,h=o}),v=typeof window=="object",p=typeof importScripts=="function",M=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string"&&process.type!="renderer",b=Object.assign({},c),A="./this.program",x=(s,o)=>{throw o},m="";function U(s){return c.locateFile?c.locateFile(s,m):m+s}var F,w;if(M){var I=Vs,C=Vs;m=__dirname+"/",w=s=>{s=St(s)?new URL(s):C.normalize(s);var o=I.readFileSync(s);return o},F=(s,o=!0)=>(s=St(s)?new URL(s):C.normalize(s),new Promise((u,d)=>{I.readFile(s,o?void 0:"utf8",(y,R)=>{y?d(y):u(o?R.buffer:R)})})),!c.thisProgram&&process.argv.length>1&&(A=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),x=(s,o)=>{throw process.exitCode=s,o}}else(v||p)&&(p?m=self.location.href:typeof document<"u"&&document.currentScript&&(m=document.currentScript.src),n&&(m=n),m.startsWith("blob:")?m="":m=m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1),p&&(w=s=>{var o=new XMLHttpRequest;return o.open("GET",s,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),F=s=>St(s)?new Promise((o,u)=>{var d=new XMLHttpRequest;d.open("GET",s,!0),d.responseType="arraybuffer",d.onload=()=>{if(d.status==200||d.status==0&&d.response){o(d.response);return}u(d.status)},d.onerror=u,d.send(null)}):fetch(s,{credentials:"same-origin"}).then(o=>o.ok?o.arrayBuffer():Promise.reject(new Error(o.status+" : "+o.url))));var N=c.print||console.log.bind(console),E=c.printErr||console.error.bind(console);Object.assign(c,b),b=null,c.arguments&&c.arguments,c.thisProgram&&(A=c.thisProgram);var D=c.wasmBinary,G,z=!1;function ee(s,o){s||dt(o)}var se,ae,j,le,X,re,ve,we;function fe(){var s=G.buffer;c.HEAP8=se=new Int8Array(s),c.HEAP16=j=new Int16Array(s),c.HEAPU8=ae=new Uint8Array(s),c.HEAPU16=le=new Uint16Array(s),c.HEAP32=X=new Int32Array(s),c.HEAPU32=re=new Uint32Array(s),c.HEAPF32=ve=new Float32Array(s),c.HEAPF64=we=new Float64Array(s)}var ge=[],Ne=[],Me=[],He=!1;function K(){var s=c.preRun;s&&(typeof s=="function"&&(s=[s]),s.forEach(Pe)),ye(ge)}function me(){He=!0,!c.noFSInit&&!S.initialized&&S.init(),S.ignorePermissions=!1,ye(Ne)}function ue(){var s=c.postRun;s&&(typeof s=="function"&&(s=[s]),s.forEach(Ge)),ye(Me)}function Pe(s){ge.unshift(s)}function ke(s){Ne.unshift(s)}function Ge(s){Me.unshift(s)}var ct=0,We=null;function $e(s){return s}function Ze(s){var o;ct++,(o=c.monitorRunDependencies)==null||o.call(c,ct)}function Ye(s){var u;if(ct--,(u=c.monitorRunDependencies)==null||u.call(c,ct),ct==0&&We){var o=We;We=null,o()}}function dt(s){var u;(u=c.onAbort)==null||u.call(c,s),s="Aborted("+s+")",E(s),z=!0,s+=". Build with -sASSERTIONS for more info.",He&&jo();var o=new WebAssembly.RuntimeError(s);throw h(o),o}var xt="data:application/octet-stream;base64,",Et=s=>s.startsWith(xt),St=s=>s.startsWith("file://");function Mt(){var s="occt-import-js.wasm";return Et(s)?s:U(s)}var At;function V(s){if(s==At&&D)return new Uint8Array(D);if(w)return w(s);throw"both async and sync fetching of the wasm failed"}function Pt(s){return D?Promise.resolve().then(()=>V(s)):F(s).then(o=>new Uint8Array(o),()=>V(s))}function mt(s,o,u){return Pt(s).then(d=>WebAssembly.instantiate(d,o)).then(u,d=>{E(`failed to asynchronously prepare wasm: ${d}`),dt(d)})}function P(s,o,u,d){return!s&&typeof WebAssembly.instantiateStreaming=="function"&&!Et(o)&&!St(o)&&!M&&typeof fetch=="function"?fetch(o,{credentials:"same-origin"}).then(y=>{var R=WebAssembly.instantiateStreaming(y,u);return R.then(d,function(L){return E(`wasm streaming compile failed: ${L}`),E("falling back to ArrayBuffer instantiation"),mt(o,u,d)})}):mt(o,u,d)}function g(){return{a:fh}}function q(){var s=g();function o(d,y){return Yt=d.exports,G=Yt._,fe(),zo=Yt.ba,ke(Yt.$),Ye(),Yt}Ze();function u(d){o(d.instance)}if(c.instantiateWasm)try{return c.instantiateWasm(s,o)}catch(d){E(`Module.instantiateWasm callback failed with error: ${d}`),h(d)}return At??(At=Mt()),P(D,At,s,u).catch(h),{}}var H,te;function xe(s){this.name="ExitStatus",this.message=`Program terminated with exit(${s})`,this.status=s}var ye=s=>{s.forEach(o=>o(c))};c.noExitRuntime;var Z={isAbs:s=>s.charAt(0)==="/",splitPath:s=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return o.exec(s).slice(1)},normalizeArray:(s,o)=>{for(var u=0,d=s.length-1;d>=0;d--){var y=s[d];y==="."?s.splice(d,1):y===".."?(s.splice(d,1),u++):u&&(s.splice(d,1),u--)}if(o)for(;u;u--)s.unshift("..");return s},normalize:s=>{var o=Z.isAbs(s),u=s.substr(-1)==="/";return s=Z.normalizeArray(s.split("/").filter(d=>!!d),!o).join("/"),!s&&!o&&(s="."),s&&u&&(s+="/"),(o?"/":"")+s},dirname:s=>{var o=Z.splitPath(s),u=o[0],d=o[1];return!u&&!d?".":(d&&(d=d.substr(0,d.length-1)),u+d)},basename:s=>{if(s==="/")return"/";s=Z.normalize(s),s=s.replace(/\/$/,"");var o=s.lastIndexOf("/");return o===-1?s:s.substr(o+1)},join:(...s)=>Z.normalize(s.join("/")),join2:(s,o)=>Z.normalize(s+"/"+o)},ce=()=>{if(typeof crypto=="object"&&typeof crypto.getRandomValues=="function")return d=>crypto.getRandomValues(d);if(M)try{var s=Vs,o=s.randomFillSync;if(o)return d=>s.randomFillSync(d);var u=s.randomBytes;return d=>(d.set(u(d.byteLength)),d)}catch{}dt("initRandomDevice")},Te=s=>(Te=ce())(s),Le={resolve:(...s)=>{for(var o="",u=!1,d=s.length-1;d>=-1&&!u;d--){var y=d>=0?s[d]:S.cwd();if(typeof y!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!y)return"";o=y+"/"+o,u=Z.isAbs(y)}return o=Z.normalizeArray(o.split("/").filter(R=>!!R),!u).join("/"),(u?"/":"")+o||"."},relative:(s,o)=>{s=Le.resolve(s).substr(1),o=Le.resolve(o).substr(1);function u(_e){for(var De=0;De<_e.length&&_e[De]==="";De++);for(var Fe=_e.length-1;Fe>=0&&_e[Fe]==="";Fe--);return De>Fe?[]:_e.slice(De,Fe-De+1)}for(var d=u(s.split("/")),y=u(o.split("/")),R=Math.min(d.length,y.length),L=R,O=0;O<R;O++)if(d[O]!==y[O]){L=O;break}for(var ie=[],O=L;O<d.length;O++)ie.push("..");return ie=ie.concat(y.slice(L)),ie.join("/")}},be=typeof TextDecoder<"u"?new TextDecoder:void 0,Se=(s,o=0,u=NaN)=>{for(var d=o+u,y=o;s[y]&&!(y>=d);)++y;if(y-o>16&&s.buffer&&be)return be.decode(s.subarray(o,y));for(var R="";o<y;){var L=s[o++];if(!(L&128)){R+=String.fromCharCode(L);continue}var O=s[o++]&63;if((L&224)==192){R+=String.fromCharCode((L&31)<<6|O);continue}var ie=s[o++]&63;if((L&240)==224?L=(L&15)<<12|O<<6|ie:L=(L&7)<<18|O<<12|ie<<6|s[o++]&63,L<65536)R+=String.fromCharCode(L);else{var _e=L-65536;R+=String.fromCharCode(55296|_e>>10,56320|_e&1023)}}return R},ze=[],qe=s=>{for(var o=0,u=0;u<s.length;++u){var d=s.charCodeAt(u);d<=127?o++:d<=2047?o+=2:d>=55296&&d<=57343?(o+=4,++u):o+=3}return o},Qe=(s,o,u,d)=>{if(!(d>0))return 0;for(var y=u,R=u+d-1,L=0;L<s.length;++L){var O=s.charCodeAt(L);if(O>=55296&&O<=57343){var ie=s.charCodeAt(++L);O=65536+((O&1023)<<10)|ie&1023}if(O<=127){if(u>=R)break;o[u++]=O}else if(O<=2047){if(u+1>=R)break;o[u++]=192|O>>6,o[u++]=128|O&63}else if(O<=65535){if(u+2>=R)break;o[u++]=224|O>>12,o[u++]=128|O>>6&63,o[u++]=128|O&63}else{if(u+3>=R)break;o[u++]=240|O>>18,o[u++]=128|O>>12&63,o[u++]=128|O>>6&63,o[u++]=128|O&63}}return o[u]=0,u-y};function B(s,o,u){var d=qe(s)+1,y=new Array(d),R=Qe(s,y,0,y.length);return y.length=R,y}var ne=()=>{if(!ze.length){var s=null;if(M){var o=256,u=Buffer.alloc(o),d=0,y=process.stdin.fd;try{d=I.readSync(y,u,0,o)}catch(R){if(R.toString().includes("EOF"))d=0;else throw R}d>0&&(s=u.slice(0,d).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(s=window.prompt("Input: "),s!==null&&(s+=`
`));if(!s)return null;ze=B(s)}return ze.shift()},J={ttys:[],init(){},shutdown(){},register(s,o){J.ttys[s]={input:[],output:[],ops:o},S.registerDevice(s,J.stream_ops)},stream_ops:{open(s){var o=J.ttys[s.node.rdev];if(!o)throw new S.ErrnoError(43);s.tty=o,s.seekable=!1},close(s){s.tty.ops.fsync(s.tty)},fsync(s){s.tty.ops.fsync(s.tty)},read(s,o,u,d,y){if(!s.tty||!s.tty.ops.get_char)throw new S.ErrnoError(60);for(var R=0,L=0;L<d;L++){var O;try{O=s.tty.ops.get_char(s.tty)}catch{throw new S.ErrnoError(29)}if(O===void 0&&R===0)throw new S.ErrnoError(6);if(O==null)break;R++,o[u+L]=O}return R&&(s.node.timestamp=Date.now()),R},write(s,o,u,d,y){if(!s.tty||!s.tty.ops.put_char)throw new S.ErrnoError(60);try{for(var R=0;R<d;R++)s.tty.ops.put_char(s.tty,o[u+R])}catch{throw new S.ErrnoError(29)}return d&&(s.node.timestamp=Date.now()),R}},default_tty_ops:{get_char(s){return ne()},put_char(s,o){o===null||o===10?(N(Se(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output&&s.output.length>0&&(N(Se(s.output)),s.output=[])},ioctl_tcgets(s){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(s,o,u){return 0},ioctl_tiocgwinsz(s){return[24,80]}},default_tty1_ops:{put_char(s,o){o===null||o===10?(E(Se(s.output)),s.output=[]):o!=0&&s.output.push(o)},fsync(s){s.output&&s.output.length>0&&(E(Se(s.output)),s.output=[])}}},he=(s,o)=>{ae.fill(0,s,s+o)},pe=(s,o)=>Math.ceil(s/o)*o,oe=s=>{s=pe(s,65536);var o=Jo(65536,s);return o&&he(o,s),o},de={ops_table:null,mount(s){return de.createNode(null,"/",16895,0)},createNode(s,o,u,d){if(S.isBlkdev(u)||S.isFIFO(u))throw new S.ErrnoError(63);de.ops_table||(de.ops_table={dir:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr,lookup:de.node_ops.lookup,mknod:de.node_ops.mknod,rename:de.node_ops.rename,unlink:de.node_ops.unlink,rmdir:de.node_ops.rmdir,readdir:de.node_ops.readdir,symlink:de.node_ops.symlink},stream:{llseek:de.stream_ops.llseek}},file:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr},stream:{llseek:de.stream_ops.llseek,read:de.stream_ops.read,write:de.stream_ops.write,allocate:de.stream_ops.allocate,mmap:de.stream_ops.mmap,msync:de.stream_ops.msync}},link:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr,readlink:de.node_ops.readlink},stream:{}},chrdev:{node:{getattr:de.node_ops.getattr,setattr:de.node_ops.setattr},stream:S.chrdev_stream_ops}});var y=S.createNode(s,o,u,d);return S.isDir(y.mode)?(y.node_ops=de.ops_table.dir.node,y.stream_ops=de.ops_table.dir.stream,y.contents={}):S.isFile(y.mode)?(y.node_ops=de.ops_table.file.node,y.stream_ops=de.ops_table.file.stream,y.usedBytes=0,y.contents=null):S.isLink(y.mode)?(y.node_ops=de.ops_table.link.node,y.stream_ops=de.ops_table.link.stream):S.isChrdev(y.mode)&&(y.node_ops=de.ops_table.chrdev.node,y.stream_ops=de.ops_table.chrdev.stream),y.timestamp=Date.now(),s&&(s.contents[o]=y,s.timestamp=y.timestamp),y},getFileDataAsTypedArray(s){return s.contents?s.contents.subarray?s.contents.subarray(0,s.usedBytes):new Uint8Array(s.contents):new Uint8Array(0)},expandFileStorage(s,o){var u=s.contents?s.contents.length:0;if(!(u>=o)){var d=1024*1024;o=Math.max(o,u*(u<d?2:1.125)>>>0),u!=0&&(o=Math.max(o,256));var y=s.contents;s.contents=new Uint8Array(o),s.usedBytes>0&&s.contents.set(y.subarray(0,s.usedBytes),0)}},resizeFileStorage(s,o){if(s.usedBytes!=o)if(o==0)s.contents=null,s.usedBytes=0;else{var u=s.contents;s.contents=new Uint8Array(o),u&&s.contents.set(u.subarray(0,Math.min(o,s.usedBytes))),s.usedBytes=o}},node_ops:{getattr(s){var o={};return o.dev=S.isChrdev(s.mode)?s.id:1,o.ino=s.id,o.mode=s.mode,o.nlink=1,o.uid=0,o.gid=0,o.rdev=s.rdev,S.isDir(s.mode)?o.size=4096:S.isFile(s.mode)?o.size=s.usedBytes:S.isLink(s.mode)?o.size=s.link.length:o.size=0,o.atime=new Date(s.timestamp),o.mtime=new Date(s.timestamp),o.ctime=new Date(s.timestamp),o.blksize=4096,o.blocks=Math.ceil(o.size/o.blksize),o},setattr(s,o){o.mode!==void 0&&(s.mode=o.mode),o.timestamp!==void 0&&(s.timestamp=o.timestamp),o.size!==void 0&&de.resizeFileStorage(s,o.size)},lookup(s,o){throw S.genericErrors[44]},mknod(s,o,u,d){return de.createNode(s,o,u,d)},rename(s,o,u){if(S.isDir(s.mode)){var d;try{d=S.lookupNode(o,u)}catch{}if(d)for(var y in d.contents)throw new S.ErrnoError(55)}delete s.parent.contents[s.name],s.parent.timestamp=Date.now(),s.name=u,o.contents[u]=s,o.timestamp=s.parent.timestamp},unlink(s,o){delete s.contents[o],s.timestamp=Date.now()},rmdir(s,o){var u=S.lookupNode(s,o);for(var d in u.contents)throw new S.ErrnoError(55);delete s.contents[o],s.timestamp=Date.now()},readdir(s){var o=[".",".."];for(var u of Object.keys(s.contents))o.push(u);return o},symlink(s,o,u){var d=de.createNode(s,o,41471,0);return d.link=u,d},readlink(s){if(!S.isLink(s.mode))throw new S.ErrnoError(28);return s.link}},stream_ops:{read(s,o,u,d,y){var R=s.node.contents;if(y>=s.node.usedBytes)return 0;var L=Math.min(s.node.usedBytes-y,d);if(L>8&&R.subarray)o.set(R.subarray(y,y+L),u);else for(var O=0;O<L;O++)o[u+O]=R[y+O];return L},write(s,o,u,d,y,R){if(o.buffer===se.buffer&&(R=!1),!d)return 0;var L=s.node;if(L.timestamp=Date.now(),o.subarray&&(!L.contents||L.contents.subarray)){if(R)return L.contents=o.subarray(u,u+d),L.usedBytes=d,d;if(L.usedBytes===0&&y===0)return L.contents=o.slice(u,u+d),L.usedBytes=d,d;if(y+d<=L.usedBytes)return L.contents.set(o.subarray(u,u+d),y),d}if(de.expandFileStorage(L,y+d),L.contents.subarray&&o.subarray)L.contents.set(o.subarray(u,u+d),y);else for(var O=0;O<d;O++)L.contents[y+O]=o[u+O];return L.usedBytes=Math.max(L.usedBytes,y+d),d},llseek(s,o,u){var d=o;if(u===1?d+=s.position:u===2&&S.isFile(s.node.mode)&&(d+=s.node.usedBytes),d<0)throw new S.ErrnoError(28);return d},allocate(s,o,u){de.expandFileStorage(s.node,o+u),s.node.usedBytes=Math.max(s.node.usedBytes,o+u)},mmap(s,o,u,d,y){if(!S.isFile(s.node.mode))throw new S.ErrnoError(43);var R,L,O=s.node.contents;if(!(y&2)&&O&&O.buffer===se.buffer)L=!1,R=O.byteOffset;else{if(L=!0,R=oe(o),!R)throw new S.ErrnoError(48);O&&((u>0||u+o<O.length)&&(O.subarray?O=O.subarray(u,u+o):O=Array.prototype.slice.call(O,u,u+o)),se.set(O,R))}return{ptr:R,allocated:L}},msync(s,o,u,d,y){return de.stream_ops.write(s,o,0,d,u,!1),0}}},Re=(s,o,u,d)=>{var y=`al ${s}`;F(s).then(R=>{o(new Uint8Array(R)),y&&Ye()},R=>{if(u)u();else throw`Loading data file "${s}" failed.`}),y&&Ze()},je=(s,o,u,d,y,R)=>{S.createDataFile(s,o,u,d,y,R)},et=c.preloadPlugins||[],Nt=(s,o,u,d)=>{typeof Browser<"u"&&Browser.init();var y=!1;return et.forEach(R=>{y||R.canHandle(o)&&(R.handle(s,o,u,d),y=!0)}),y},kt=(s,o,u,d,y,R,L,O,ie,_e)=>{var De=o?Le.resolve(Z.join2(s,o)):s;function Fe(tt){function Be(it){_e==null||_e(),O||je(s,o,it,d,y,ie),R==null||R(),Ye()}Nt(tt,De,Be,()=>{L==null||L(),Ye()})||Be(tt)}Ze(),typeof u=="string"?Re(u,Fe,L):Fe(u)},Hn=s=>{var o={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},u=o[s];if(typeof u>"u")throw new Error(`Unknown file open mode: ${s}`);return u},vi=(s,o)=>{var u=0;return s&&(u|=365),o&&(u|=146),u},S={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:class{constructor(s){this.name="ErrnoError",this.errno=s}},genericErrors:{},filesystems:null,syncFSRequests:0,readFiles:{},FSStream:class{constructor(){this.shared={}}get object(){return this.node}set object(s){this.node=s}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(s){this.shared.flags=s}get position(){return this.shared.position}set position(s){this.shared.position=s}},FSNode:class{constructor(s,o,u,d){s||(s=this),this.parent=s,this.mount=s.mount,this.mounted=null,this.id=S.nextInode++,this.name=o,this.mode=u,this.node_ops={},this.stream_ops={},this.rdev=d,this.readMode=365,this.writeMode=146}get read(){return(this.mode&this.readMode)===this.readMode}set read(s){s?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(s){s?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return S.isDir(this.mode)}get isDevice(){return S.isChrdev(this.mode)}},lookupPath(s,o={}){if(s=Le.resolve(s),!s)return{path:"",node:null};var u={follow_mount:!0,recurse_count:0};if(o=Object.assign(u,o),o.recurse_count>8)throw new S.ErrnoError(32);for(var d=s.split("/").filter(Fe=>!!Fe),y=S.root,R="/",L=0;L<d.length;L++){var O=L===d.length-1;if(O&&o.parent)break;if(y=S.lookupNode(y,d[L]),R=Z.join2(R,d[L]),S.isMountpoint(y)&&(!O||O&&o.follow_mount)&&(y=y.mounted.root),!O||o.follow)for(var ie=0;S.isLink(y.mode);){var _e=S.readlink(R);R=Le.resolve(Z.dirname(R),_e);var De=S.lookupPath(R,{recurse_count:o.recurse_count+1});if(y=De.node,ie++>40)throw new S.ErrnoError(32)}}return{path:R,node:y}},getPath(s){for(var o;;){if(S.isRoot(s)){var u=s.mount.mountpoint;return o?u[u.length-1]!=="/"?`${u}/${o}`:u+o:u}o=o?`${s.name}/${o}`:s.name,s=s.parent}},hashName(s,o){for(var u=0,d=0;d<o.length;d++)u=(u<<5)-u+o.charCodeAt(d)|0;return(s+u>>>0)%S.nameTable.length},hashAddNode(s){var o=S.hashName(s.parent.id,s.name);s.name_next=S.nameTable[o],S.nameTable[o]=s},hashRemoveNode(s){var o=S.hashName(s.parent.id,s.name);if(S.nameTable[o]===s)S.nameTable[o]=s.name_next;else for(var u=S.nameTable[o];u;){if(u.name_next===s){u.name_next=s.name_next;break}u=u.name_next}},lookupNode(s,o){var u=S.mayLookup(s);if(u)throw new S.ErrnoError(u);for(var d=S.hashName(s.id,o),y=S.nameTable[d];y;y=y.name_next){var R=y.name;if(y.parent.id===s.id&&R===o)return y}return S.lookup(s,o)},createNode(s,o,u,d){var y=new S.FSNode(s,o,u,d);return S.hashAddNode(y),y},destroyNode(s){S.hashRemoveNode(s)},isRoot(s){return s===s.parent},isMountpoint(s){return!!s.mounted},isFile(s){return(s&61440)===32768},isDir(s){return(s&61440)===16384},isLink(s){return(s&61440)===40960},isChrdev(s){return(s&61440)===8192},isBlkdev(s){return(s&61440)===24576},isFIFO(s){return(s&61440)===4096},isSocket(s){return(s&49152)===49152},flagsToPermissionString(s){var o=["r","w","rw"][s&3];return s&512&&(o+="w"),o},nodePermissions(s,o){return S.ignorePermissions?0:o.includes("r")&&!(s.mode&292)||o.includes("w")&&!(s.mode&146)||o.includes("x")&&!(s.mode&73)?2:0},mayLookup(s){if(!S.isDir(s.mode))return 54;var o=S.nodePermissions(s,"x");return o||(s.node_ops.lookup?0:2)},mayCreate(s,o){try{var u=S.lookupNode(s,o);return 20}catch{}return S.nodePermissions(s,"wx")},mayDelete(s,o,u){var d;try{d=S.lookupNode(s,o)}catch(R){return R.errno}var y=S.nodePermissions(s,"wx");if(y)return y;if(u){if(!S.isDir(d.mode))return 54;if(S.isRoot(d)||S.getPath(d)===S.cwd())return 10}else if(S.isDir(d.mode))return 31;return 0},mayOpen(s,o){return s?S.isLink(s.mode)?32:S.isDir(s.mode)&&(S.flagsToPermissionString(o)!=="r"||o&512)?31:S.nodePermissions(s,S.flagsToPermissionString(o)):44},MAX_OPEN_FDS:4096,nextfd(){for(var s=0;s<=S.MAX_OPEN_FDS;s++)if(!S.streams[s])return s;throw new S.ErrnoError(33)},getStreamChecked(s){var o=S.getStream(s);if(!o)throw new S.ErrnoError(8);return o},getStream:s=>S.streams[s],createStream(s,o=-1){return s=Object.assign(new S.FSStream,s),o==-1&&(o=S.nextfd()),s.fd=o,S.streams[o]=s,s},closeStream(s){S.streams[s]=null},dupStream(s,o=-1){var d,y;var u=S.createStream(s,o);return(y=(d=u.stream_ops)==null?void 0:d.dup)==null||y.call(d,u),u},chrdev_stream_ops:{open(s){var u,d;var o=S.getDevice(s.node.rdev);s.stream_ops=o.stream_ops,(d=(u=s.stream_ops).open)==null||d.call(u,s)},llseek(){throw new S.ErrnoError(70)}},major:s=>s>>8,minor:s=>s&255,makedev:(s,o)=>s<<8|o,registerDevice(s,o){S.devices[s]={stream_ops:o}},getDevice:s=>S.devices[s],getMounts(s){for(var o=[],u=[s];u.length;){var d=u.pop();o.push(d),u.push(...d.mounts)}return o},syncfs(s,o){typeof s=="function"&&(o=s,s=!1),S.syncFSRequests++,S.syncFSRequests>1&&E(`warning: ${S.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var u=S.getMounts(S.root.mount),d=0;function y(L){return S.syncFSRequests--,o(L)}function R(L){if(L)return R.errored?void 0:(R.errored=!0,y(L));++d>=u.length&&y(null)}u.forEach(L=>{if(!L.type.syncfs)return R(null);L.type.syncfs(L,s,R)})},mount(s,o,u){var d=u==="/",y=!u,R;if(d&&S.root)throw new S.ErrnoError(10);if(!d&&!y){var L=S.lookupPath(u,{follow_mount:!1});if(u=L.path,R=L.node,S.isMountpoint(R))throw new S.ErrnoError(10);if(!S.isDir(R.mode))throw new S.ErrnoError(54)}var O={type:s,opts:o,mountpoint:u,mounts:[]},ie=s.mount(O);return ie.mount=O,O.root=ie,d?S.root=ie:R&&(R.mounted=O,R.mount&&R.mount.mounts.push(O)),ie},unmount(s){var o=S.lookupPath(s,{follow_mount:!1});if(!S.isMountpoint(o.node))throw new S.ErrnoError(28);var u=o.node,d=u.mounted,y=S.getMounts(d);Object.keys(S.nameTable).forEach(L=>{for(var O=S.nameTable[L];O;){var ie=O.name_next;y.includes(O.mount)&&S.destroyNode(O),O=ie}}),u.mounted=null;var R=u.mount.mounts.indexOf(d);u.mount.mounts.splice(R,1)},lookup(s,o){return s.node_ops.lookup(s,o)},mknod(s,o,u){var d=S.lookupPath(s,{parent:!0}),y=d.node,R=Z.basename(s);if(!R||R==="."||R==="..")throw new S.ErrnoError(28);var L=S.mayCreate(y,R);if(L)throw new S.ErrnoError(L);if(!y.node_ops.mknod)throw new S.ErrnoError(63);return y.node_ops.mknod(y,R,o,u)},create(s,o){return o=o!==void 0?o:438,o&=4095,o|=32768,S.mknod(s,o,0)},mkdir(s,o){return o=o!==void 0?o:511,o&=1023,o|=16384,S.mknod(s,o,0)},mkdirTree(s,o){for(var u=s.split("/"),d="",y=0;y<u.length;++y)if(u[y]){d+="/"+u[y];try{S.mkdir(d,o)}catch(R){if(R.errno!=20)throw R}}},mkdev(s,o,u){return typeof u>"u"&&(u=o,o=438),o|=8192,S.mknod(s,o,u)},symlink(s,o){if(!Le.resolve(s))throw new S.ErrnoError(44);var u=S.lookupPath(o,{parent:!0}),d=u.node;if(!d)throw new S.ErrnoError(44);var y=Z.basename(o),R=S.mayCreate(d,y);if(R)throw new S.ErrnoError(R);if(!d.node_ops.symlink)throw new S.ErrnoError(63);return d.node_ops.symlink(d,y,s)},rename(s,o){var u=Z.dirname(s),d=Z.dirname(o),y=Z.basename(s),R=Z.basename(o),L,O,ie;if(L=S.lookupPath(s,{parent:!0}),O=L.node,L=S.lookupPath(o,{parent:!0}),ie=L.node,!O||!ie)throw new S.ErrnoError(44);if(O.mount!==ie.mount)throw new S.ErrnoError(75);var _e=S.lookupNode(O,y),De=Le.relative(s,d);if(De.charAt(0)!==".")throw new S.ErrnoError(28);if(De=Le.relative(o,u),De.charAt(0)!==".")throw new S.ErrnoError(55);var Fe;try{Fe=S.lookupNode(ie,R)}catch{}if(_e!==Fe){var tt=S.isDir(_e.mode),Be=S.mayDelete(O,y,tt);if(Be)throw new S.ErrnoError(Be);if(Be=Fe?S.mayDelete(ie,R,tt):S.mayCreate(ie,R),Be)throw new S.ErrnoError(Be);if(!O.node_ops.rename)throw new S.ErrnoError(63);if(S.isMountpoint(_e)||Fe&&S.isMountpoint(Fe))throw new S.ErrnoError(10);if(ie!==O&&(Be=S.nodePermissions(O,"w"),Be))throw new S.ErrnoError(Be);S.hashRemoveNode(_e);try{O.node_ops.rename(_e,ie,R),_e.parent=ie}catch(it){throw it}finally{S.hashAddNode(_e)}}},rmdir(s){var o=S.lookupPath(s,{parent:!0}),u=o.node,d=Z.basename(s),y=S.lookupNode(u,d),R=S.mayDelete(u,d,!0);if(R)throw new S.ErrnoError(R);if(!u.node_ops.rmdir)throw new S.ErrnoError(63);if(S.isMountpoint(y))throw new S.ErrnoError(10);u.node_ops.rmdir(u,d),S.destroyNode(y)},readdir(s){var o=S.lookupPath(s,{follow:!0}),u=o.node;if(!u.node_ops.readdir)throw new S.ErrnoError(54);return u.node_ops.readdir(u)},unlink(s){var o=S.lookupPath(s,{parent:!0}),u=o.node;if(!u)throw new S.ErrnoError(44);var d=Z.basename(s),y=S.lookupNode(u,d),R=S.mayDelete(u,d,!1);if(R)throw new S.ErrnoError(R);if(!u.node_ops.unlink)throw new S.ErrnoError(63);if(S.isMountpoint(y))throw new S.ErrnoError(10);u.node_ops.unlink(u,d),S.destroyNode(y)},readlink(s){var o=S.lookupPath(s),u=o.node;if(!u)throw new S.ErrnoError(44);if(!u.node_ops.readlink)throw new S.ErrnoError(28);return Le.resolve(S.getPath(u.parent),u.node_ops.readlink(u))},stat(s,o){var u=S.lookupPath(s,{follow:!o}),d=u.node;if(!d)throw new S.ErrnoError(44);if(!d.node_ops.getattr)throw new S.ErrnoError(63);return d.node_ops.getattr(d)},lstat(s){return S.stat(s,!0)},chmod(s,o,u){var d;if(typeof s=="string"){var y=S.lookupPath(s,{follow:!u});d=y.node}else d=s;if(!d.node_ops.setattr)throw new S.ErrnoError(63);d.node_ops.setattr(d,{mode:o&4095|d.mode&-4096,timestamp:Date.now()})},lchmod(s,o){S.chmod(s,o,!0)},fchmod(s,o){var u=S.getStreamChecked(s);S.chmod(u.node,o)},chown(s,o,u,d){var y;if(typeof s=="string"){var R=S.lookupPath(s,{follow:!d});y=R.node}else y=s;if(!y.node_ops.setattr)throw new S.ErrnoError(63);y.node_ops.setattr(y,{timestamp:Date.now()})},lchown(s,o,u){S.chown(s,o,u,!0)},fchown(s,o,u){var d=S.getStreamChecked(s);S.chown(d.node,o,u)},truncate(s,o){if(o<0)throw new S.ErrnoError(28);var u;if(typeof s=="string"){var d=S.lookupPath(s,{follow:!0});u=d.node}else u=s;if(!u.node_ops.setattr)throw new S.ErrnoError(63);if(S.isDir(u.mode))throw new S.ErrnoError(31);if(!S.isFile(u.mode))throw new S.ErrnoError(28);var y=S.nodePermissions(u,"w");if(y)throw new S.ErrnoError(y);u.node_ops.setattr(u,{size:o,timestamp:Date.now()})},ftruncate(s,o){var u=S.getStreamChecked(s);if(!(u.flags&2097155))throw new S.ErrnoError(28);S.truncate(u.node,o)},utime(s,o,u){var d=S.lookupPath(s,{follow:!0}),y=d.node;y.node_ops.setattr(y,{timestamp:Math.max(o,u)})},open(s,o,u){if(s==="")throw new S.ErrnoError(44);o=typeof o=="string"?Hn(o):o,o&64?(u=typeof u>"u"?438:u,u=u&4095|32768):u=0;var d;if(typeof s=="object")d=s;else{s=Z.normalize(s);try{var y=S.lookupPath(s,{follow:!(o&131072)});d=y.node}catch{}}var R=!1;if(o&64)if(d){if(o&128)throw new S.ErrnoError(20)}else d=S.mknod(s,u,0),R=!0;if(!d)throw new S.ErrnoError(44);if(S.isChrdev(d.mode)&&(o&=-513),o&65536&&!S.isDir(d.mode))throw new S.ErrnoError(54);if(!R){var L=S.mayOpen(d,o);if(L)throw new S.ErrnoError(L)}o&512&&!R&&S.truncate(d,0),o&=-131713;var O=S.createStream({node:d,path:S.getPath(d),flags:o,seekable:!0,position:0,stream_ops:d.stream_ops,ungotten:[],error:!1});return O.stream_ops.open&&O.stream_ops.open(O),c.logReadFiles&&!(o&1)&&(s in S.readFiles||(S.readFiles[s]=1)),O},close(s){if(S.isClosed(s))throw new S.ErrnoError(8);s.getdents&&(s.getdents=null);try{s.stream_ops.close&&s.stream_ops.close(s)}catch(o){throw o}finally{S.closeStream(s.fd)}s.fd=null},isClosed(s){return s.fd===null},llseek(s,o,u){if(S.isClosed(s))throw new S.ErrnoError(8);if(!s.seekable||!s.stream_ops.llseek)throw new S.ErrnoError(70);if(u!=0&&u!=1&&u!=2)throw new S.ErrnoError(28);return s.position=s.stream_ops.llseek(s,o,u),s.ungotten=[],s.position},read(s,o,u,d,y){if(d<0||y<0)throw new S.ErrnoError(28);if(S.isClosed(s))throw new S.ErrnoError(8);if((s.flags&2097155)===1)throw new S.ErrnoError(8);if(S.isDir(s.node.mode))throw new S.ErrnoError(31);if(!s.stream_ops.read)throw new S.ErrnoError(28);var R=typeof y<"u";if(!R)y=s.position;else if(!s.seekable)throw new S.ErrnoError(70);var L=s.stream_ops.read(s,o,u,d,y);return R||(s.position+=L),L},write(s,o,u,d,y,R){if(d<0||y<0)throw new S.ErrnoError(28);if(S.isClosed(s))throw new S.ErrnoError(8);if(!(s.flags&2097155))throw new S.ErrnoError(8);if(S.isDir(s.node.mode))throw new S.ErrnoError(31);if(!s.stream_ops.write)throw new S.ErrnoError(28);s.seekable&&s.flags&1024&&S.llseek(s,0,2);var L=typeof y<"u";if(!L)y=s.position;else if(!s.seekable)throw new S.ErrnoError(70);var O=s.stream_ops.write(s,o,u,d,y,R);return L||(s.position+=O),O},allocate(s,o,u){if(S.isClosed(s))throw new S.ErrnoError(8);if(o<0||u<=0)throw new S.ErrnoError(28);if(!(s.flags&2097155))throw new S.ErrnoError(8);if(!S.isFile(s.node.mode)&&!S.isDir(s.node.mode))throw new S.ErrnoError(43);if(!s.stream_ops.allocate)throw new S.ErrnoError(138);s.stream_ops.allocate(s,o,u)},mmap(s,o,u,d,y){if(d&2&&!(y&2)&&(s.flags&2097155)!==2)throw new S.ErrnoError(2);if((s.flags&2097155)===1)throw new S.ErrnoError(2);if(!s.stream_ops.mmap)throw new S.ErrnoError(43);if(!o)throw new S.ErrnoError(28);return s.stream_ops.mmap(s,o,u,d,y)},msync(s,o,u,d,y){return s.stream_ops.msync?s.stream_ops.msync(s,o,u,d,y):0},ioctl(s,o,u){if(!s.stream_ops.ioctl)throw new S.ErrnoError(59);return s.stream_ops.ioctl(s,o,u)},readFile(s,o={}){if(o.flags=o.flags||0,o.encoding=o.encoding||"binary",o.encoding!=="utf8"&&o.encoding!=="binary")throw new Error(`Invalid encoding type "${o.encoding}"`);var u,d=S.open(s,o.flags),y=S.stat(s),R=y.size,L=new Uint8Array(R);return S.read(d,L,0,R,0),o.encoding==="utf8"?u=Se(L):o.encoding==="binary"&&(u=L),S.close(d),u},writeFile(s,o,u={}){u.flags=u.flags||577;var d=S.open(s,u.flags,u.mode);if(typeof o=="string"){var y=new Uint8Array(qe(o)+1),R=Qe(o,y,0,y.length);S.write(d,y,0,R,void 0,u.canOwn)}else if(ArrayBuffer.isView(o))S.write(d,o,0,o.byteLength,void 0,u.canOwn);else throw new Error("Unsupported data type");S.close(d)},cwd:()=>S.currentPath,chdir(s){var o=S.lookupPath(s,{follow:!0});if(o.node===null)throw new S.ErrnoError(44);if(!S.isDir(o.node.mode))throw new S.ErrnoError(54);var u=S.nodePermissions(o.node,"x");if(u)throw new S.ErrnoError(u);S.currentPath=o.path},createDefaultDirectories(){S.mkdir("/tmp"),S.mkdir("/home"),S.mkdir("/home/web_user")},createDefaultDevices(){S.mkdir("/dev"),S.registerDevice(S.makedev(1,3),{read:()=>0,write:(d,y,R,L,O)=>L}),S.mkdev("/dev/null",S.makedev(1,3)),J.register(S.makedev(5,0),J.default_tty_ops),J.register(S.makedev(6,0),J.default_tty1_ops),S.mkdev("/dev/tty",S.makedev(5,0)),S.mkdev("/dev/tty1",S.makedev(6,0));var s=new Uint8Array(1024),o=0,u=()=>(o===0&&(o=Te(s).byteLength),s[--o]);S.createDevice("/dev","random",u),S.createDevice("/dev","urandom",u),S.mkdir("/dev/shm"),S.mkdir("/dev/shm/tmp")},createSpecialDirectories(){S.mkdir("/proc");var s=S.mkdir("/proc/self");S.mkdir("/proc/self/fd"),S.mount({mount(){var o=S.createNode(s,"fd",16895,73);return o.node_ops={lookup(u,d){var y=+d,R=S.getStreamChecked(y),L={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>R.path}};return L.parent=L,L}},o}},{},"/proc/self/fd")},createStandardStreams(s,o,u){s?S.createDevice("/dev","stdin",s):S.symlink("/dev/tty","/dev/stdin"),o?S.createDevice("/dev","stdout",null,o):S.symlink("/dev/tty","/dev/stdout"),u?S.createDevice("/dev","stderr",null,u):S.symlink("/dev/tty1","/dev/stderr"),S.open("/dev/stdin",0),S.open("/dev/stdout",1),S.open("/dev/stderr",1)},staticInit(){[44].forEach(s=>{S.genericErrors[s]=new S.ErrnoError(s),S.genericErrors[s].stack="<generic error, no stack>"}),S.nameTable=new Array(4096),S.mount(de,{},"/"),S.createDefaultDirectories(),S.createDefaultDevices(),S.createSpecialDirectories(),S.filesystems={MEMFS:de}},init(s,o,u){S.initialized=!0,s??(s=c.stdin),o??(o=c.stdout),u??(u=c.stderr),S.createStandardStreams(s,o,u)},quit(){S.initialized=!1;for(var s=0;s<S.streams.length;s++){var o=S.streams[s];o&&S.close(o)}},findObject(s,o){var u=S.analyzePath(s,o);return u.exists?u.object:null},analyzePath(s,o){try{var u=S.lookupPath(s,{follow:!o});s=u.path}catch{}var d={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var u=S.lookupPath(s,{parent:!0});d.parentExists=!0,d.parentPath=u.path,d.parentObject=u.node,d.name=Z.basename(s),u=S.lookupPath(s,{follow:!o}),d.exists=!0,d.path=u.path,d.object=u.node,d.name=u.node.name,d.isRoot=u.path==="/"}catch(y){d.error=y.errno}return d},createPath(s,o,u,d){s=typeof s=="string"?s:S.getPath(s);for(var y=o.split("/").reverse();y.length;){var R=y.pop();if(R){var L=Z.join2(s,R);try{S.mkdir(L)}catch{}s=L}}return L},createFile(s,o,u,d,y){var R=Z.join2(typeof s=="string"?s:S.getPath(s),o),L=vi(d,y);return S.create(R,L)},createDataFile(s,o,u,d,y,R){var L=o;s&&(s=typeof s=="string"?s:S.getPath(s),L=o?Z.join2(s,o):s);var O=vi(d,y),ie=S.create(L,O);if(u){if(typeof u=="string"){for(var _e=new Array(u.length),De=0,Fe=u.length;De<Fe;++De)_e[De]=u.charCodeAt(De);u=_e}S.chmod(ie,O|146);var tt=S.open(ie,577);S.write(tt,u,0,u.length,0,R),S.close(tt),S.chmod(ie,O)}},createDevice(s,o,u,d){var O;var y=Z.join2(typeof s=="string"?s:S.getPath(s),o),R=vi(!!u,!!d);(O=S.createDevice).major??(O.major=64);var L=S.makedev(S.createDevice.major++,0);return S.registerDevice(L,{open(ie){ie.seekable=!1},close(ie){var _e;(_e=d==null?void 0:d.buffer)!=null&&_e.length&&d(10)},read(ie,_e,De,Fe,tt){for(var Be=0,it=0;it<Fe;it++){var gt;try{gt=u()}catch{throw new S.ErrnoError(29)}if(gt===void 0&&Be===0)throw new S.ErrnoError(6);if(gt==null)break;Be++,_e[De+it]=gt}return Be&&(ie.node.timestamp=Date.now()),Be},write(ie,_e,De,Fe,tt){for(var Be=0;Be<Fe;Be++)try{d(_e[De+Be])}catch{throw new S.ErrnoError(29)}return Fe&&(ie.node.timestamp=Date.now()),Be}}),S.mkdev(y,R,L)},forceLoadFile(s){if(s.isDevice||s.isFolder||s.link||s.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{s.contents=w(s.url),s.usedBytes=s.contents.length}catch{throw new S.ErrnoError(29)}},createLazyFile(s,o,u,d,y){class R{constructor(){this.lengthKnown=!1,this.chunks=[]}get(Be){if(!(Be>this.length-1||Be<0)){var it=Be%this.chunkSize,gt=Be/this.chunkSize|0;return this.getter(gt)[it]}}setDataGetter(Be){this.getter=Be}cacheLength(){var Be=new XMLHttpRequest;if(Be.open("HEAD",u,!1),Be.send(null),!(Be.status>=200&&Be.status<300||Be.status===304))throw new Error("Couldn't load "+u+". Status: "+Be.status);var it=Number(Be.getResponseHeader("Content-length")),gt,$t=(gt=Be.getResponseHeader("Accept-Ranges"))&&gt==="bytes",It=(gt=Be.getResponseHeader("Content-Encoding"))&&gt==="gzip",yn=1024*1024;$t||(yn=it);var bn=(Dn,Ui)=>{if(Dn>Ui)throw new Error("invalid range ("+Dn+", "+Ui+") or no bytes requested!");if(Ui>it-1)throw new Error("only "+it+" bytes available! programmer error!");var Kt=new XMLHttpRequest;if(Kt.open("GET",u,!1),it!==yn&&Kt.setRequestHeader("Range","bytes="+Dn+"-"+Ui),Kt.responseType="arraybuffer",Kt.overrideMimeType&&Kt.overrideMimeType("text/plain; charset=x-user-defined"),Kt.send(null),!(Kt.status>=200&&Kt.status<300||Kt.status===304))throw new Error("Couldn't load "+u+". Status: "+Kt.status);return Kt.response!==void 0?new Uint8Array(Kt.response||[]):B(Kt.responseText||"")},fr=this;fr.setDataGetter(Dn=>{var Ui=Dn*yn,Kt=(Dn+1)*yn-1;if(Kt=Math.min(Kt,it-1),typeof fr.chunks[Dn]>"u"&&(fr.chunks[Dn]=bn(Ui,Kt)),typeof fr.chunks[Dn]>"u")throw new Error("doXHR failed!");return fr.chunks[Dn]}),(It||!it)&&(yn=it=1,it=this.getter(0).length,yn=it,N("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=it,this._chunkSize=yn,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!p)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var L=new R,O={isDevice:!1,contents:L}}else var O={isDevice:!1,url:u};var ie=S.createFile(s,o,O,d,y);O.contents?ie.contents=O.contents:O.url&&(ie.contents=null,ie.url=O.url),Object.defineProperties(ie,{usedBytes:{get:function(){return this.contents.length}}});var _e={},De=Object.keys(ie.stream_ops);De.forEach(tt=>{var Be=ie.stream_ops[tt];_e[tt]=(...it)=>(S.forceLoadFile(ie),Be(...it))});function Fe(tt,Be,it,gt,$t){var It=tt.node.contents;if($t>=It.length)return 0;var yn=Math.min(It.length-$t,gt);if(It.slice)for(var bn=0;bn<yn;bn++)Be[it+bn]=It[$t+bn];else for(var bn=0;bn<yn;bn++)Be[it+bn]=It.get($t+bn);return yn}return _e.read=(tt,Be,it,gt,$t)=>(S.forceLoadFile(ie),Fe(tt,Be,it,gt,$t)),_e.mmap=(tt,Be,it,gt,$t)=>{S.forceLoadFile(ie);var It=oe(Be);if(!It)throw new S.ErrnoError(48);return Fe(tt,se,It,Be,it),{ptr:It,allocated:!0}},ie.stream_ops=_e,ie}},un=(s,o)=>s?Se(ae,s,o):"",ut={DEFAULT_POLLMASK:5,calculateAt(s,o,u){if(Z.isAbs(o))return o;var d;if(s===-100)d=S.cwd();else{var y=ut.getStreamFromFD(s);d=y.path}if(o.length==0){if(!u)throw new S.ErrnoError(44);return d}return Z.join2(d,o)},doStat(s,o,u){var d=s(o);X[u>>2]=d.dev,X[u+4>>2]=d.mode,re[u+8>>2]=d.nlink,X[u+12>>2]=d.uid,X[u+16>>2]=d.gid,X[u+20>>2]=d.rdev,te=[d.size>>>0,(H=d.size,+Math.abs(H)>=1?H>0?+Math.floor(H/4294967296)>>>0:~~+Math.ceil((H-+(~~H>>>0))/4294967296)>>>0:0)],X[u+24>>2]=te[0],X[u+28>>2]=te[1],X[u+32>>2]=4096,X[u+36>>2]=d.blocks;var y=d.atime.getTime(),R=d.mtime.getTime(),L=d.ctime.getTime();return te=[Math.floor(y/1e3)>>>0,(H=Math.floor(y/1e3),+Math.abs(H)>=1?H>0?+Math.floor(H/4294967296)>>>0:~~+Math.ceil((H-+(~~H>>>0))/4294967296)>>>0:0)],X[u+40>>2]=te[0],X[u+44>>2]=te[1],re[u+48>>2]=y%1e3*1e3*1e3,te=[Math.floor(R/1e3)>>>0,(H=Math.floor(R/1e3),+Math.abs(H)>=1?H>0?+Math.floor(H/4294967296)>>>0:~~+Math.ceil((H-+(~~H>>>0))/4294967296)>>>0:0)],X[u+56>>2]=te[0],X[u+60>>2]=te[1],re[u+64>>2]=R%1e3*1e3*1e3,te=[Math.floor(L/1e3)>>>0,(H=Math.floor(L/1e3),+Math.abs(H)>=1?H>0?+Math.floor(H/4294967296)>>>0:~~+Math.ceil((H-+(~~H>>>0))/4294967296)>>>0:0)],X[u+72>>2]=te[0],X[u+76>>2]=te[1],re[u+80>>2]=L%1e3*1e3*1e3,te=[d.ino>>>0,(H=d.ino,+Math.abs(H)>=1?H>0?+Math.floor(H/4294967296)>>>0:~~+Math.ceil((H-+(~~H>>>0))/4294967296)>>>0:0)],X[u+88>>2]=te[0],X[u+92>>2]=te[1],0},doMsync(s,o,u,d,y){if(!S.isFile(o.node.mode))throw new S.ErrnoError(43);if(d&2)return 0;var R=ae.slice(s,s+u);S.msync(o,R,y,u,d)},getStreamFromFD(s){var o=S.getStreamChecked(s);return o},varargs:void 0,getStr(s){var o=un(s);return o}};function ei(s,o){try{return s=ut.getStr(s),S.chmod(s,o),0}catch(u){if(typeof S>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function ti(s,o,u,d){try{if(o=ut.getStr(o),o=ut.calculateAt(s,o),u&-8)return-28;var y=S.lookupPath(o,{follow:!0}),R=y.node;if(!R)return-44;var L="";return u&4&&(L+="r"),u&2&&(L+="w"),u&1&&(L+="x"),L&&S.nodePermissions(R,L)?-2:0}catch(O){if(typeof S>"u"||O.name!=="ErrnoError")throw O;return-O.errno}}function nn(){var s=X[+ut.varargs>>2];return ut.varargs+=4,s}var pn=nn;function Ci(s,o,u){ut.varargs=u;try{var d=ut.getStreamFromFD(s);switch(o){case 0:{var y=nn();if(y<0)return-28;for(;S.streams[y];)y++;var R;return R=S.dupStream(d,y),R.fd}case 1:case 2:return 0;case 3:return d.flags;case 4:{var y=nn();return d.flags|=y,0}case 12:{var y=pn(),L=0;return j[y+L>>1]=2,0}case 13:case 14:return 0}return-28}catch(O){if(typeof S>"u"||O.name!=="ErrnoError")throw O;return-O.errno}}function Rr(s,o){try{var u=ut.getStreamFromFD(s);return ut.doStat(S.stat,u.path,o)}catch(d){if(typeof S>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}function Pi(s,o,u){ut.varargs=u;try{var d=ut.getStreamFromFD(s);switch(o){case 21509:return d.tty?0:-59;case 21505:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tcgets){var y=d.tty.ops.ioctl_tcgets(d),R=pn();X[R>>2]=y.c_iflag||0,X[R+4>>2]=y.c_oflag||0,X[R+8>>2]=y.c_cflag||0,X[R+12>>2]=y.c_lflag||0;for(var L=0;L<32;L++)se[R+L+17]=y.c_cc[L]||0;return 0}return 0}case 21510:case 21511:case 21512:return d.tty?0:-59;case 21506:case 21507:case 21508:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tcsets){for(var R=pn(),O=X[R>>2],ie=X[R+4>>2],_e=X[R+8>>2],De=X[R+12>>2],Fe=[],L=0;L<32;L++)Fe.push(se[R+L+17]);return d.tty.ops.ioctl_tcsets(d.tty,o,{c_iflag:O,c_oflag:ie,c_cflag:_e,c_lflag:De,c_cc:Fe})}return 0}case 21519:{if(!d.tty)return-59;var R=pn();return X[R>>2]=0,0}case 21520:return d.tty?-28:-59;case 21531:{var R=pn();return S.ioctl(d,o,R)}case 21523:{if(!d.tty)return-59;if(d.tty.ops.ioctl_tiocgwinsz){var tt=d.tty.ops.ioctl_tiocgwinsz(d.tty),R=pn();j[R>>1]=tt[0],j[R+2>>1]=tt[1]}return 0}case 21524:return d.tty?0:-59;case 21515:return d.tty?0:-59;default:return-28}}catch(Be){if(typeof S>"u"||Be.name!=="ErrnoError")throw Be;return-Be.errno}}function Cr(s,o){try{return s=ut.getStr(s),ut.doStat(S.lstat,s,o)}catch(u){if(typeof S>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Di(s,o,u,d){try{o=ut.getStr(o);var y=d&256,R=d&4096;return d=d&-6401,o=ut.calculateAt(s,o,R),ut.doStat(y?S.lstat:S.stat,o,u)}catch(L){if(typeof S>"u"||L.name!=="ErrnoError")throw L;return-L.errno}}function Pr(s,o,u,d){ut.varargs=d;try{o=ut.getStr(o),o=ut.calculateAt(s,o);var y=d?nn():0;return S.open(o,u,y).fd}catch(R){if(typeof S>"u"||R.name!=="ErrnoError")throw R;return-R.errno}}function Dr(s){try{return s=ut.getStr(s),S.rmdir(s),0}catch(o){if(typeof S>"u"||o.name!=="ErrnoError")throw o;return-o.errno}}function Ds(s,o){try{return s=ut.getStr(s),ut.doStat(S.stat,s,o)}catch(u){if(typeof S>"u"||u.name!=="ErrnoError")throw u;return-u.errno}}function Ls(s,o,u){try{return o=ut.getStr(o),o=ut.calculateAt(s,o),u===0?S.unlink(o):u===512?S.rmdir(o):dt("Invalid flags passed to unlinkat"),0}catch(d){if(typeof S>"u"||d.name!=="ErrnoError")throw d;return-d.errno}}var Is=()=>{dt("")},Us=(s,o,u,d,y)=>{},T=()=>{for(var s=new Array(256),o=0;o<256;++o)s[o]=String.fromCharCode(o);W=s},W,Q=s=>{for(var o="",u=s;ae[u];)o+=W[ae[u++]];return o},Y={},$={},Ae={},Ie,Ee=s=>{throw new Ie(s)},Ve,Xe=s=>{throw new Ve(s)},rt=(s,o,u)=>{s.forEach(O=>Ae[O]=o);function d(O){var ie=u(O);ie.length!==s.length&&Xe("Mismatched type converter count");for(var _e=0;_e<s.length;++_e)Oe(s[_e],ie[_e])}var y=new Array(o.length),R=[],L=0;o.forEach((O,ie)=>{$.hasOwnProperty(O)?y[ie]=$[O]:(R.push(O),Y.hasOwnProperty(O)||(Y[O]=[]),Y[O].push(()=>{y[ie]=$[O],++L,L===R.length&&d(y)}))}),R.length===0&&d(y)};function at(s,o,u={}){var d=o.name;if(s||Ee(`type "${d}" must have a positive integer typeid pointer`),$.hasOwnProperty(s)){if(u.ignoreDuplicateRegistrations)return;Ee(`Cannot register type '${d}' twice`)}if($[s]=o,delete Ae[s],Y.hasOwnProperty(s)){var y=Y[s];delete Y[s],y.forEach(R=>R())}}function Oe(s,o,u={}){return at(s,o,u)}var pt=8,Lt=(s,o,u,d)=>{o=Q(o),Oe(s,{name:o,fromWireType:function(y){return!!y},toWireType:function(y,R){return R?u:d},argPackAdvance:pt,readValueFromPointer:function(y){return this.fromWireType(ae[y])},destructorFunction:null})},Rt=[],ht=[],Ft=s=>{s>9&&--ht[s+1]===0&&(ht[s]=void 0,Rt.push(s))},Ue=()=>ht.length/2-5-Rt.length,rn=()=>{ht.push(0,1,void 0,1,null,1,!0,1,!1,1),c.count_emval_handles=Ue},Ke={toValue:s=>(s||Ee("Cannot use deleted val. handle = "+s),ht[s]),toHandle:s=>{switch(s){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const o=Rt.pop()||ht.length;return ht[o]=s,ht[o+1]=1,o}}}};function Jt(s){return this.fromWireType(re[s>>2])}var mn={name:"emscripten::val",fromWireType:s=>{var o=Ke.toValue(s);return Ft(s),o},toWireType:(s,o)=>Ke.toHandle(o),argPackAdvance:pt,readValueFromPointer:Jt,destructorFunction:null},Pn=s=>Oe(s,mn),ni=(s,o)=>{switch(o){case 4:return function(u){return this.fromWireType(ve[u>>2])};case 8:return function(u){return this.fromWireType(we[u>>3])};default:throw new TypeError(`invalid float width (${o}): ${s}`)}},yt=(s,o,u)=>{o=Q(o),Oe(s,{name:o,fromWireType:d=>d,toWireType:(d,y)=>y,argPackAdvance:pt,readValueFromPointer:ni(o,u),destructorFunction:null})},Ct=(s,o)=>Object.defineProperty(o,"name",{value:s}),Sn=s=>{for(;s.length;){var o=s.pop(),u=s.pop();u(o)}};function bt(s){for(var o=1;o<s.length;++o)if(s[o]!==null&&s[o].destructorFunction===void 0)return!0;return!1}function En(s,o){if(!(s instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof s} which is not a function`);var u=Ct(s.name||"unknownFunctionName",function(){});u.prototype=s.prototype;var d=new u,y=s.apply(d,o);return y instanceof Object?y:d}function ii(s,o,u,d){for(var y=bt(s),R=s.length-2,L=[],O=["fn"],ie=0;ie<R;++ie)L.push(`arg${ie}`),O.push(`arg${ie}Wired`);L=L.join(","),O=O.join(",");var _e=`return function (${L}) {
`;y&&(_e+=`var destructors = [];
`);for(var De=y?"destructors":"null",Fe=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"],ie=0;ie<R;++ie)_e+=`var arg${ie}Wired = argType${ie}['toWireType'](${De}, arg${ie});
`,Fe.push(`argType${ie}`);if(_e+=(u||d?"var rv = ":"")+`invoker(${O});
`,y)_e+=`runDestructors(destructors);
`;else for(var ie=2;ie<s.length;++ie){var tt=ie===1?"thisWired":"arg"+(ie-2)+"Wired";s[ie].destructorFunction!==null&&(_e+=`${tt}_dtor(${tt});
`,Fe.push(`${tt}_dtor`))}return u&&(_e+=`var ret = retType['fromWireType'](rv);
return ret;
`),_e+=`}
`,[Fe,_e]}function Lr(s,o,u,d,y,R){var L=o.length;L<2&&Ee("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var O=o[1]!==null&&u!==null,ie=bt(o),_e=o[0].name!=="void",De=[s,Ee,d,y,Sn,o[0],o[1]],Fe=0;Fe<L-2;++Fe)De.push(o[Fe+2]);if(!ie)for(var Fe=2;Fe<o.length;++Fe)o[Fe].destructorFunction!==null&&De.push(o[Fe].destructorFunction);let[tt,Be]=ii(o,O,_e,R);tt.push(Be);var it=En(Function,tt)(...De);return Ct(s,it)}var Kc=(s,o,u)=>{if(s[o].overloadTable===void 0){var d=s[o];s[o]=function(...y){return s[o].overloadTable.hasOwnProperty(y.length)||Ee(`Function '${u}' called with an invalid number of arguments (${y.length}) - expects one of (${s[o].overloadTable})!`),s[o].overloadTable[y.length].apply(this,y)},s[o].overloadTable=[],s[o].overloadTable[d.argCount]=d}},Zc=(s,o,u)=>{c.hasOwnProperty(s)?((u===void 0||c[s].overloadTable!==void 0&&c[s].overloadTable[u]!==void 0)&&Ee(`Cannot register public name '${s}' twice`),Kc(c,s,s),c.hasOwnProperty(u)&&Ee(`Cannot register multiple overloads of a function with the same number of arguments (${u})!`),c[s].overloadTable[u]=o):(c[s]=o,u!==void 0&&(c[s].numArguments=u))},Jc=(s,o)=>{for(var u=[],d=0;d<s;d++)u.push(re[o+d*4>>2]);return u},jc=(s,o,u)=>{c.hasOwnProperty(s)||Xe("Replacing nonexistent public symbol"),c[s].overloadTable!==void 0&&u!==void 0?c[s].overloadTable[u]=o:(c[s]=o,c[s].argCount=u)},Qc=(s,o,u)=>{s=s.replace(/p/g,"i");var d=c["dynCall_"+s];return d(o,...u)},Ir=[],zo,Vo=s=>{var o=Ir[s];return o||(s>=Ir.length&&(Ir.length=s+1),Ir[s]=o=zo.get(s)),o},eu=(s,o,u=[])=>{if(s.includes("j"))return Qc(s,o,u);var d=Vo(o)(...u);return d},tu=(s,o)=>(...u)=>eu(s,o,u),nu=(s,o)=>{s=Q(s);function u(){return s.includes("j")?tu(s,o):Vo(o)}var d=u();return typeof d!="function"&&Ee(`unknown function pointer with signature ${s}: ${o}`),d},iu=(s,o)=>{var u=Ct(o,function(d){this.name=o,this.message=d;var y=new Error(d).stack;y!==void 0&&(this.stack=this.toString()+`
`+y.replace(/^Error(:[^\n]*)?\n/,""))});return u.prototype=Object.create(s.prototype),u.prototype.constructor=u,u.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},u},Ho,Go=s=>{var o=Ko(s),u=Q(o);return Gn(o),u},ru=(s,o)=>{var u=[],d={};function y(R){if(!d[R]&&!$[R]){if(Ae[R]){Ae[R].forEach(y);return}u.push(R),d[R]=!0}}throw o.forEach(y),new Ho(`${s}: `+u.map(Go).join([", "]))},su=s=>{s=s.trim();const o=s.indexOf("(");return o!==-1?s.substr(0,o):s},au=(s,o,u,d,y,R,L,O)=>{var ie=Jc(o,u);s=Q(s),s=su(s),y=nu(d,y),Zc(s,function(){ru(`Cannot call ${s} due to unbound types`,ie)},o-1),rt([],ie,_e=>{var De=[_e[0],null].concat(_e.slice(1));return jc(s,Lr(s,De,null,y,R,L),o-1),[]})},ou=(s,o,u)=>{switch(o){case 1:return u?d=>se[d]:d=>ae[d];case 2:return u?d=>j[d>>1]:d=>le[d>>1];case 4:return u?d=>X[d>>2]:d=>re[d>>2];default:throw new TypeError(`invalid integer width (${o}): ${s}`)}},lu=(s,o,u,d,y)=>{o=Q(o);var R=De=>De;if(d===0){var L=32-8*u;R=De=>De<<L>>>L}var O=o.includes("unsigned"),ie=(De,Fe)=>{},_e;O?_e=function(De,Fe){return ie(Fe,this.name),Fe>>>0}:_e=function(De,Fe){return ie(Fe,this.name),Fe},Oe(s,{name:o,fromWireType:R,toWireType:_e,argPackAdvance:pt,readValueFromPointer:ou(o,u,d!==0),destructorFunction:null})},cu=(s,o,u)=>{var d=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],y=d[o];function R(L){var O=re[L>>2],ie=re[L+4>>2];return new y(se.buffer,ie,O)}u=Q(u),Oe(s,{name:u,fromWireType:R,argPackAdvance:pt,readValueFromPointer:R},{ignoreDuplicateRegistrations:!0})},Li=(s,o,u)=>Qe(s,ae,o,u),uu=(s,o)=>{o=Q(o);var u=o==="std::string";Oe(s,{name:o,fromWireType(d){var y=re[d>>2],R=d+4,L;if(u)for(var O=R,ie=0;ie<=y;++ie){var _e=R+ie;if(ie==y||ae[_e]==0){var De=_e-O,Fe=un(O,De);L===void 0?L=Fe:(L+="\0",L+=Fe),O=_e+1}}else{for(var tt=new Array(y),ie=0;ie<y;++ie)tt[ie]=String.fromCharCode(ae[R+ie]);L=tt.join("")}return Gn(d),L},toWireType(d,y){y instanceof ArrayBuffer&&(y=new Uint8Array(y));var R,L=typeof y=="string";L||y instanceof Uint8Array||y instanceof Uint8ClampedArray||y instanceof Int8Array||Ee("Cannot pass non-string to std::string"),u&&L?R=qe(y):R=y.length;var O=zs(4+R+1),ie=O+4;if(re[O>>2]=R,u&&L)Li(y,ie,R+1);else if(L)for(var _e=0;_e<R;++_e){var De=y.charCodeAt(_e);De>255&&(Gn(ie),Ee("String has UTF-16 code units that do not fit in 8 bits")),ae[ie+_e]=De}else for(var _e=0;_e<R;++_e)ae[ie+_e]=y[_e];return d!==null&&d.push(Gn,O),O},argPackAdvance:pt,readValueFromPointer:Jt,destructorFunction(d){Gn(d)}})},Wo=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,hu=(s,o)=>{for(var u=s,d=u>>1,y=d+o/2;!(d>=y)&&le[d];)++d;if(u=d<<1,u-s>32&&Wo)return Wo.decode(ae.subarray(s,u));for(var R="",L=0;!(L>=o/2);++L){var O=j[s+L*2>>1];if(O==0)break;R+=String.fromCharCode(O)}return R},fu=(s,o,u)=>{if(u??(u=2147483647),u<2)return 0;u-=2;for(var d=o,y=u<s.length*2?u/2:s.length,R=0;R<y;++R){var L=s.charCodeAt(R);j[o>>1]=L,o+=2}return j[o>>1]=0,o-d},du=s=>s.length*2,pu=(s,o)=>{for(var u=0,d="";!(u>=o/4);){var y=X[s+u*4>>2];if(y==0)break;if(++u,y>=65536){var R=y-65536;d+=String.fromCharCode(55296|R>>10,56320|R&1023)}else d+=String.fromCharCode(y)}return d},mu=(s,o,u)=>{if(u??(u=2147483647),u<4)return 0;for(var d=o,y=d+u-4,R=0;R<s.length;++R){var L=s.charCodeAt(R);if(L>=55296&&L<=57343){var O=s.charCodeAt(++R);L=65536+((L&1023)<<10)|O&1023}if(X[o>>2]=L,o+=4,o+4>y)break}return X[o>>2]=0,o-d},_u=s=>{for(var o=0,u=0;u<s.length;++u){var d=s.charCodeAt(u);d>=55296&&d<=57343&&++u,o+=4}return o},gu=(s,o,u)=>{u=Q(u);var d,y,R,L;o===2?(d=hu,y=fu,L=du,R=O=>le[O>>1]):o===4&&(d=pu,y=mu,L=_u,R=O=>re[O>>2]),Oe(s,{name:u,fromWireType:O=>{for(var ie=re[O>>2],_e,De=O+4,Fe=0;Fe<=ie;++Fe){var tt=O+4+Fe*o;if(Fe==ie||R(tt)==0){var Be=tt-De,it=d(De,Be);_e===void 0?_e=it:(_e+="\0",_e+=it),De=tt+o}}return Gn(O),_e},toWireType:(O,ie)=>{typeof ie!="string"&&Ee(`Cannot pass non-string to C++ string type ${u}`);var _e=L(ie),De=zs(4+_e+o);return re[De>>2]=_e/o,y(ie,De+4,_e+o),O!==null&&O.push(Gn,De),De},argPackAdvance:pt,readValueFromPointer:Jt,destructorFunction(O){Gn(O)}})},vu=(s,o)=>{o=Q(o),Oe(s,{isVoid:!0,name:o,argPackAdvance:0,fromWireType:()=>{},toWireType:(u,d)=>{}})},xu=1,Mu=()=>xu,Xo=s=>{for(var o=s.split("."),u=0;u<4;u++){var d=Number(o[u]);if(isNaN(d))return null;o[u]=d}return(o[0]|o[1]<<8|o[2]<<16|o[3]<<24)>>>0},Ur=s=>parseInt(s),Su=s=>{var o,u,d,y,R=/^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i,L=[];if(!R.test(s))return null;if(s==="::")return[0,0,0,0,0,0,0,0];for(s.startsWith("::")?s=s.replace("::","Z:"):s=s.replace("::",":Z:"),s.indexOf(".")>0?(s=s.replace(new RegExp("[.]","g"),":"),o=s.split(":"),o[o.length-4]=Ur(o[o.length-4])+Ur(o[o.length-3])*256,o[o.length-3]=Ur(o[o.length-2])+Ur(o[o.length-1])*256,o=o.slice(0,o.length-2)):o=s.split(":"),d=0,y=0,u=0;u<o.length;u++)if(typeof o[u]=="string")if(o[u]==="Z"){for(y=0;y<8-o.length+1;y++)L[u+y]=0;d=y-1}else L[u+d]=Zo(parseInt(o[u],16));else L[u+d]=o[u];return[L[1]<<16|L[0],L[3]<<16|L[2],L[5]<<16|L[4],L[7]<<16|L[6]]},ri={address_map:{id:1,addrs:{},names:{}},lookup_name(s){var o=Xo(s);if(o!==null||(o=Su(s),o!==null))return s;var u;if(ri.address_map.addrs[s])u=ri.address_map.addrs[s];else{var d=ri.address_map.id++;ee(d<65535,"exceeded max address mappings of 65535"),u="172.29."+(d&255)+"."+(d&65280),ri.address_map.names[u]=s,ri.address_map.addrs[s]=u}return u},lookup_addr(s){return ri.address_map.names[s]?ri.address_map.names[s]:null}},Eu=s=>{var o=un(s);return Xo(ri.lookup_name(o))},yu=(s,o,u)=>ae.copyWithin(s,o,o+u),Ns=(s,o)=>{var u=$[s];return u===void 0&&Ee(`${o} has unknown type ${Go(s)}`),u},qo=(s,o,u)=>{var d=[],y=s.toWireType(d,u);return d.length&&(re[o>>2]=Ke.toHandle(d)),y},bu=(s,o,u)=>(s=Ke.toValue(s),o=Ns(o,"emval::as"),qo(o,u,s)),Tu={},Fs=s=>{var o=Tu[s];return o===void 0?Q(s):o},Os=[],wu=(s,o,u,d,y)=>(s=Os[s],o=Ke.toValue(o),u=Fs(u),s(o,o[u],d,y)),Yo=()=>typeof globalThis=="object"?globalThis:function(){return Function}()("return this")(),Au=s=>s===0?Ke.toHandle(Yo()):(s=Fs(s),Ke.toHandle(Yo()[s])),Ru=s=>{var o=Os.length;return Os.push(s),o},Cu=(s,o)=>{for(var u=new Array(s),d=0;d<s;++d)u[d]=Ns(re[o+d*4>>2],"parameter "+d);return u},Pu=(s,o,u)=>{var d=Cu(s,o),y=d.shift();s--;var R=`return function (obj, func, destructorsRef, args) {
`,L=0,O=[];u===0&&O.push("obj");for(var ie=["retType"],_e=[y],De=0;De<s;++De)O.push("arg"+De),ie.push("argType"+De),_e.push(d[De]),R+=`  var arg${De} = argType${De}.readValueFromPointer(args${L?"+"+L:""});
`,L+=d[De].argPackAdvance;var Fe=u===1?"new func":"func.call";R+=`  var rv = ${Fe}(${O.join(", ")});
`,y.isVoid||(ie.push("emval_returnValue"),_e.push(qo),R+=`  return emval_returnValue(retType, destructorsRef, rv);
`),R+=`};
`,ie.push(R);var tt=En(Function,ie)(..._e),Be=`methodCaller<(${d.map(it=>it.name).join(", ")}) => ${y.name}>`;return Ru(Ct(Be,tt))},Du=(s,o)=>(s=Ke.toValue(s),o=Ke.toValue(o),Ke.toHandle(s[o])),Lu=s=>{s>9&&(ht[s+1]+=1)},Iu=()=>Ke.toHandle([]),Uu=s=>Ke.toHandle(Fs(s)),Nu=()=>Ke.toHandle({}),Fu=s=>{var o=Ke.toValue(s);Sn(o),Ft(s)},Ou=(s,o,u)=>{s=Ke.toValue(s),o=Ke.toValue(o),u=Ke.toValue(u),s[o]=u},Bu=(s,o)=>{s=Ns(s,"_emval_take_value");var u=s.readValueFromPointer(o);return Ke.toHandle(u)},ku=s=>s%4===0&&(s%100!==0||s%400===0),zu=[0,31,60,91,121,152,182,213,244,274,305,335],Vu=[0,31,59,90,120,151,181,212,243,273,304,334],Hu=s=>{var o=ku(s.getFullYear()),u=o?zu:Vu,d=u[s.getMonth()]+s.getDate()-1;return d},Bs=(s,o)=>o+2097152>>>0<4194305-!!s?(s>>>0)+o*4294967296:NaN;function Gu(s,o,u){var d=Bs(s,o),y=new Date(d*1e3);X[u>>2]=y.getSeconds(),X[u+4>>2]=y.getMinutes(),X[u+8>>2]=y.getHours(),X[u+12>>2]=y.getDate(),X[u+16>>2]=y.getMonth(),X[u+20>>2]=y.getFullYear()-1900,X[u+24>>2]=y.getDay();var R=Hu(y)|0;X[u+28>>2]=R,X[u+36>>2]=-(y.getTimezoneOffset()*60);var L=new Date(y.getFullYear(),0,1),O=new Date(y.getFullYear(),6,1).getTimezoneOffset(),ie=L.getTimezoneOffset(),_e=(O!=ie&&y.getTimezoneOffset()==Math.min(ie,O))|0;X[u+32>>2]=_e}function Wu(s,o,u,d,y,R,L){var O=Bs(R,L);try{var ie=ut.getStreamFromFD(y);u&2&&ut.doMsync(s,ie,o,d,O)}catch(_e){if(typeof S>"u"||_e.name!=="ErrnoError")throw _e;return-_e.errno}}var Xu=(s,o,u,d)=>{var y=new Date().getFullYear(),R=new Date(y,0,1),L=new Date(y,6,1),O=R.getTimezoneOffset(),ie=L.getTimezoneOffset(),_e=Math.max(O,ie);re[s>>2]=_e*60,X[o>>2]=+(O!=ie);var De=Be=>{var it=Be>=0?"-":"+",gt=Math.abs(Be),$t=String(Math.floor(gt/60)).padStart(2,"0"),It=String(gt%60).padStart(2,"0");return`UTC${it}${$t}${It}`},Fe=De(O),tt=De(ie);ie<O?(Li(Fe,u,17),Li(tt,d,17)):(Li(Fe,d,17),Li(tt,u,17))},qu=()=>Date.now();function Yu(){return new Error().stack.toString()}var Ii=s=>{Ii.shown||(Ii.shown={}),Ii.shown[s]||(Ii.shown[s]=1,M&&(s="warning: "+s),E(s))};function $u(s){var o=Yu(),u=o.lastIndexOf("_emscripten_log"),d=o.lastIndexOf("_emscripten_get_callstack"),y=o.indexOf(`
`,Math.max(u,d))+1;o=o.slice(y),s&8&&typeof emscripten_source_map>"u"&&(Ii('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.'),s^=8,s|=16);var R=o.split(`
`);o="";var L=new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)"),O=new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?"),ie=new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");for(var _e in R){var De=R[_e],Fe="",tt="",Be=0,it=0,gt=ie.exec(De);if(gt&&gt.length==5)Fe=gt[1],tt=gt[2],Be=gt[3],it=gt[4];else if(gt=L.exec(De)||O.exec(De),gt&&gt.length>=4)Fe=gt[1],tt=gt[2],Be=gt[3],it=gt[4]|0;else{o+=De+`
`;continue}var $t=!1;if(s&8){var It=emscripten_source_map.originalPositionFor({line:Be,column:it});$t=It==null?void 0:It.source,$t&&(s&64&&(It.source=It.source.substring(It.source.replace(/\\/g,"/").lastIndexOf("/")+1)),o+=`    at ${Fe} (${It.source}:${It.line}:${It.column})
`)}(s&16||!$t)&&(s&64&&(tt=tt.substring(tt.replace(/\\/g,"/").lastIndexOf("/")+1)),o+=($t?`     = ${Fe}`:`    at ${Fe}`)+` (${tt}:${Be}:${it})
`)}return o=o.replace(/\s+$/,""),o}function Ku(s,o,u){var d=$u(s);if(!o||u<=0)return qe(d)+1;var y=Li(d,o,u);return y+1}var $o=()=>2147483648,Zu=()=>$o(),Ju=s=>{var o=G.buffer,u=(s-o.byteLength+65535)/65536|0;try{return G.grow(u),fe(),1}catch{}},ju=s=>{var o=ae.length;s>>>=0;var u=$o();if(s>u)return!1;for(var d=1;d<=4;d*=2){var y=o*(1+.2/d);y=Math.min(y,s+100663296);var R=Math.min(u,pe(Math.max(s,y),65536)),L=Ju(R);if(L)return!0}return!1},ks={},Qu=()=>A||"./this.program",hr=()=>{if(!hr.strings){var s=(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:s,_:Qu()};for(var u in ks)ks[u]===void 0?delete o[u]:o[u]=ks[u];var d=[];for(var u in o)d.push(`${u}=${o[u]}`);hr.strings=d}return hr.strings},eh=(s,o)=>{for(var u=0;u<s.length;++u)se[o++]=s.charCodeAt(u);se[o]=0},th=(s,o)=>{var u=0;return hr().forEach((d,y)=>{var R=o+u;re[s+y*4>>2]=R,eh(d,R),u+=d.length+1}),0},nh=(s,o)=>{var u=hr();re[s>>2]=u.length;var d=0;return u.forEach(y=>d+=y.length+1),re[o>>2]=d,0},ih=s=>{x(s,new xe(s))},rh=(s,o)=>{ih(s)},sh=rh;function ah(s){try{var o=ut.getStreamFromFD(s);return S.close(o),0}catch(u){if(typeof S>"u"||u.name!=="ErrnoError")throw u;return u.errno}}var oh=(s,o,u,d)=>{for(var y=0,R=0;R<u;R++){var L=re[o>>2],O=re[o+4>>2];o+=8;var ie=S.read(s,se,L,O,d);if(ie<0)return-1;if(y+=ie,ie<O)break}return y};function lh(s,o,u,d){try{var y=ut.getStreamFromFD(s),R=oh(y,o,u);return re[d>>2]=R,0}catch(L){if(typeof S>"u"||L.name!=="ErrnoError")throw L;return L.errno}}function ch(s,o,u,d,y){var R=Bs(o,u);try{if(isNaN(R))return 61;var L=ut.getStreamFromFD(s);return S.llseek(L,R,d),te=[L.position>>>0,(H=L.position,+Math.abs(H)>=1?H>0?+Math.floor(H/4294967296)>>>0:~~+Math.ceil((H-+(~~H>>>0))/4294967296)>>>0:0)],X[y>>2]=te[0],X[y+4>>2]=te[1],L.getdents&&R===0&&d===0&&(L.getdents=null),0}catch(O){if(typeof S>"u"||O.name!=="ErrnoError")throw O;return O.errno}}var uh=(s,o,u,d)=>{for(var y=0,R=0;R<u;R++){var L=re[o>>2],O=re[o+4>>2];o+=8;var ie=S.write(s,se,L,O,d);if(ie<0)return-1;if(y+=ie,ie<O)break}return y};function hh(s,o,u,d){try{var y=ut.getStreamFromFD(s),R=uh(y,o,u);return re[d>>2]=R,0}catch(L){if(typeof S>"u"||L.name!=="ErrnoError")throw L;return L.errno}}S.createPreloadedFile=kt,S.staticInit(),T(),Ie=c.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},Ve=c.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},rn(),Ho=c.UnboundTypeError=iu(Error,"UnboundTypeError");var fh={M:ei,N:ti,h:Ci,I:Rr,Q:Pi,F:Cr,G:Di,j:Pr,B:Dr,H:Ds,C:Ls,A:Is,w:Us,V:Lt,U:Pn,n:yt,f:au,b:lu,a:cu,m:uu,i:gu,W:vu,J:Mu,x:Eu,L:yu,e:bu,q:wu,T:Ft,u:Au,p:Pu,k:Du,Y:Lu,X:Iu,r:Uu,Z:Nu,o:Fu,c:Ou,d:Bu,t:Gu,s:Wu,O:Xu,K:qu,R:Ku,z:Zu,y:ju,D:th,E:nh,S:sh,g:ah,P:lh,v:ch,l:hh},Yt=q(),Ko=s=>(Ko=Yt.aa)(s),zs=s=>(zs=Yt.ca)(s),Gn=s=>(Gn=Yt.da)(s),Zo=s=>(Zo=Yt.ea)(s),Jo=(s,o)=>(Jo=Yt.fa)(s,o),jo=()=>(jo=Yt.ga)();c.dynCall_viijii=(s,o,u,d,y,R,L)=>(c.dynCall_viijii=Yt.ha)(s,o,u,d,y,R,L),c.dynCall_viiiiji=(s,o,u,d,y,R,L,O)=>(c.dynCall_viiiiji=Yt.ia)(s,o,u,d,y,R,L,O),c.dynCall_jiji=(s,o,u,d,y)=>(c.dynCall_jiji=Yt.ja)(s,o,u,d,y),c.dynCall_iiiiij=(s,o,u,d,y,R,L)=>(c.dynCall_iiiiij=Yt.ka)(s,o,u,d,y,R,L),c.dynCall_iiiiijj=(s,o,u,d,y,R,L,O,ie)=>(c.dynCall_iiiiijj=Yt.la)(s,o,u,d,y,R,L,O,ie),c.dynCall_iiiiiijj=(s,o,u,d,y,R,L,O,ie,_e)=>(c.dynCall_iiiiiijj=Yt.ma)(s,o,u,d,y,R,L,O,ie,_e);var Nr,Qo;We=function s(){Nr||el(),Nr||(We=s)};function el(){if(ct>0||!Qo&&(Qo=1,K(),ct>0))return;function s(){var o;Nr||(Nr=1,c.calledRun=1,!z&&(me(),f(c),(o=c.onRuntimeInitialized)==null||o.call(c),ue()))}c.setStatus?(c.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>c.setStatus(""),1),s()},1)):s()}if(c.preInit)for(typeof c.preInit=="function"&&(c.preInit=[c.preInit]);c.preInit.length>0;)c.preInit.pop()();return el(),l=_,l}})();i.exports=t})(fc);var gh=fc.exports;const vh=ph(gh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vo="185",ji={ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xh=0,tl=1,Mh=2,us=1,Sh=2,Mr=3,pi=0,cn=1,Rn=2,Zn=0,Qi=1,nl=2,il=3,rl=4,Eh=5,yi=100,yh=101,bh=102,Th=103,wh=104,Ah=200,Rh=201,Ch=202,Ph=203,ba=204,Ta=205,Dh=206,Lh=207,Ih=208,Uh=209,Nh=210,Fh=211,Oh=212,Bh=213,kh=214,wa=0,Aa=1,Ra=2,ir=3,Ca=4,Pa=5,Da=6,La=7,dc=0,zh=1,Vh=2,On=0,pc=1,mc=2,_c=3,gc=4,vc=5,xc=6,Mc=7,Sc=300,Ai=301,rr=302,Hs=303,Gs=304,Ts=306,Ia=1e3,Kn=1001,Ua=1002,Zt=1003,Hh=1004,Fr=1005,en=1006,Ws=1007,Ti=1008,dn=1009,Ec=1010,yc=1011,yr=1012,xo=1013,zn=1014,Nn=1015,jn=1016,Mo=1017,So=1018,br=1020,bc=35902,Tc=35899,wc=1021,Ac=1022,Cn=1023,Qn=1026,wi=1027,Rc=1028,Eo=1029,Ri=1030,yo=1031,bo=1033,hs=33776,fs=33777,ds=33778,ps=33779,Na=35840,Fa=35841,Oa=35842,Ba=35843,ka=36196,za=37492,Va=37496,Ha=37488,Ga=37489,_s=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,$a=37811,Ka=37812,Za=37813,Ja=37814,ja=37815,Qa=37816,eo=37817,to=37818,no=37819,io=37820,ro=37821,so=36492,ao=36494,oo=36495,lo=36283,co=36284,gs=36285,uo=36286,Gh=3200,ho=0,Wh=1,fi="",gn="srgb",vs="srgb-linear",xs="linear",Tt="srgb",Ni=7680,sl=519,Xh=512,qh=513,Yh=514,To=515,$h=516,Kh=517,wo=518,Zh=519,al=35044,ol="300 es",Fn=2e3,Tr=2001;function Jh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jh(){const i=Ms("canvas");return i.style.display="block",i}const ll={};function cl(...i){const e="THREE."+i.shift();console.log(e,...i)}function Cc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Je(...i){i=Cc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function vt(...i){i=Cc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function er(...i){const e=i.join(" ");e in ll||(ll[e]=!0,Je(...i))}function Qh(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const ef={[wa]:Aa,[Ra]:Da,[Ca]:La,[ir]:Pa,[Aa]:wa,[Da]:Ra,[La]:Ca,[Pa]:ir};class gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ul=1234567;const tr=Math.PI/180,wr=180/Math.PI;function or(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function Ao(i,e){return(i%e+e)%e}function tf(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function nf(i,e,t){return i!==e?(t-i)/(e-i):0}function Er(i,e,t){return(1-t)*i+t*e}function rf(i,e,t,n){return Er(i,e,1-Math.exp(-t*n))}function sf(i,e=1){return e-Math.abs(Ao(i,e*2)-e)}function af(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function of(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function lf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function cf(i,e){return i+Math.random()*(e-i)}function uf(i){return i*(.5-Math.random())}function hf(i){i!==void 0&&(ul=i);let e=ul+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ff(i){return i*tr}function df(i){return i*wr}function pf(i){return(i&i-1)===0&&i!==0}function mf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gf(i,e,t,n,r){const a=Math.cos,l=Math.sin,c=a(t/2),f=l(t/2),h=a((e+n)/2),_=l((e+n)/2),v=a((e-n)/2),p=l((e-n)/2),M=a((n-e)/2),b=l((n-e)/2);switch(r){case"XYX":i.set(c*_,f*v,f*p,c*h);break;case"YZY":i.set(f*p,c*_,f*v,c*h);break;case"ZXZ":i.set(f*v,f*p,c*_,c*h);break;case"XZX":i.set(c*_,f*b,f*M,c*h);break;case"YXY":i.set(f*M,c*_,f*b,c*h);break;case"ZYZ":i.set(f*b,f*M,c*_,c*h);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ki(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ro={DEG2RAD:tr,RAD2DEG:wr,generateUUID:or,clamp:lt,euclideanModulo:Ao,mapLinear:tf,inverseLerp:nf,lerp:Er,damp:rf,pingpong:sf,smoothstep:af,smootherstep:of,randInt:lf,randFloat:cf,randFloatSpread:uf,seededRandom:hf,degToRad:ff,radToDeg:df,isPowerOfTwo:pf,ceilPowerOfTwo:mf,floorPowerOfTwo:_f,setQuaternionFromProperEuler:gf,normalize:sn,denormalize:Ki},No=class No{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};No.prototype.isVector2=!0;let nt=No;class mi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let f=n[r+0],h=n[r+1],_=n[r+2],v=n[r+3],p=a[l+0],M=a[l+1],b=a[l+2],A=a[l+3];if(v!==A||f!==p||h!==M||_!==b){let x=f*p+h*M+_*b+v*A;x<0&&(p=-p,M=-M,b=-b,A=-A,x=-x);let m=1-c;if(x<.9995){const U=Math.acos(x),F=Math.sin(U);m=Math.sin(m*U)/F,c=Math.sin(c*U)/F,f=f*m+p*c,h=h*m+M*c,_=_*m+b*c,v=v*m+A*c}else{f=f*m+p*c,h=h*m+M*c,_=_*m+b*c,v=v*m+A*c;const U=1/Math.sqrt(f*f+h*h+_*_+v*v);f*=U,h*=U,_*=U,v*=U}}e[t]=f,e[t+1]=h,e[t+2]=_,e[t+3]=v}static multiplyQuaternionsFlat(e,t,n,r,a,l){const c=n[r],f=n[r+1],h=n[r+2],_=n[r+3],v=a[l],p=a[l+1],M=a[l+2],b=a[l+3];return e[t]=c*b+_*v+f*M-h*p,e[t+1]=f*b+_*p+h*v-c*M,e[t+2]=h*b+_*M+c*p-f*v,e[t+3]=_*b-c*v-f*p-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,f=Math.sin,h=c(n/2),_=c(r/2),v=c(a/2),p=f(n/2),M=f(r/2),b=f(a/2);switch(l){case"XYZ":this._x=p*_*v+h*M*b,this._y=h*M*v-p*_*b,this._z=h*_*b+p*M*v,this._w=h*_*v-p*M*b;break;case"YXZ":this._x=p*_*v+h*M*b,this._y=h*M*v-p*_*b,this._z=h*_*b-p*M*v,this._w=h*_*v+p*M*b;break;case"ZXY":this._x=p*_*v-h*M*b,this._y=h*M*v+p*_*b,this._z=h*_*b+p*M*v,this._w=h*_*v-p*M*b;break;case"ZYX":this._x=p*_*v-h*M*b,this._y=h*M*v+p*_*b,this._z=h*_*b-p*M*v,this._w=h*_*v+p*M*b;break;case"YZX":this._x=p*_*v+h*M*b,this._y=h*M*v+p*_*b,this._z=h*_*b-p*M*v,this._w=h*_*v-p*M*b;break;case"XZY":this._x=p*_*v-h*M*b,this._y=h*M*v-p*_*b,this._z=h*_*b+p*M*v,this._w=h*_*v+p*M*b;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],f=t[9],h=t[2],_=t[6],v=t[10],p=n+c+v;if(p>0){const M=.5/Math.sqrt(p+1);this._w=.25/M,this._x=(_-f)*M,this._y=(a-h)*M,this._z=(l-r)*M}else if(n>c&&n>v){const M=2*Math.sqrt(1+n-c-v);this._w=(_-f)/M,this._x=.25*M,this._y=(r+l)/M,this._z=(a+h)/M}else if(c>v){const M=2*Math.sqrt(1+c-n-v);this._w=(a-h)/M,this._x=(r+l)/M,this._y=.25*M,this._z=(f+_)/M}else{const M=2*Math.sqrt(1+v-n-c);this._w=(l-r)/M,this._x=(a+h)/M,this._y=(f+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,f=t._y,h=t._z,_=t._w;return this._x=n*_+l*c+r*h-a*f,this._y=r*_+l*f+a*c-n*h,this._z=a*_+l*h+n*f-r*c,this._w=l*_-n*c-r*f-a*h,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,l=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,a=-a,l=-l,c=-c);let f=1-t;if(c<.9995){const h=Math.acos(c),_=Math.sin(h);f=Math.sin(f*h)/_,t=Math.sin(t*h)/_,this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+a*t,this._w=this._w*f+l*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+a*t,this._w=this._w*f+l*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fo=class Fo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,f=e.w,h=2*(l*r-c*n),_=2*(c*t-a*r),v=2*(a*n-l*t);return this.x=t+f*h+l*v-c*_,this.y=n+f*_+c*h-a*v,this.z=r+f*v+a*_-l*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,f=t.z;return this.x=r*f-a*c,this.y=a*l-n*f,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xs.copy(this).projectOnVector(e),this.sub(Xs)}reflect(e){return this.sub(Xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fo.prototype.isVector3=!0;let k=Fo;const Xs=new k,hl=new mi,Oo=class Oo{constructor(e,t,n,r,a,l,c,f,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,f,h)}set(e,t,n,r,a,l,c,f,h){const _=this.elements;return _[0]=e,_[1]=r,_[2]=c,_[3]=t,_[4]=a,_[5]=f,_[6]=n,_[7]=l,_[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],f=n[6],h=n[1],_=n[4],v=n[7],p=n[2],M=n[5],b=n[8],A=r[0],x=r[3],m=r[6],U=r[1],F=r[4],w=r[7],I=r[2],C=r[5],N=r[8];return a[0]=l*A+c*U+f*I,a[3]=l*x+c*F+f*C,a[6]=l*m+c*w+f*N,a[1]=h*A+_*U+v*I,a[4]=h*x+_*F+v*C,a[7]=h*m+_*w+v*N,a[2]=p*A+M*U+b*I,a[5]=p*x+M*F+b*C,a[8]=p*m+M*w+b*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],_=e[8];return t*l*_-t*c*h-n*a*_+n*c*f+r*a*h-r*l*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],_=e[8],v=_*l-c*h,p=c*f-_*a,M=h*a-l*f,b=t*v+n*p+r*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=v*A,e[1]=(r*h-_*n)*A,e[2]=(c*n-r*l)*A,e[3]=p*A,e[4]=(_*t-r*f)*A,e[5]=(r*a-c*t)*A,e[6]=M*A,e[7]=(n*f-h*t)*A,e[8]=(l*t-n*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){const f=Math.cos(a),h=Math.sin(a);return this.set(n*f,n*h,-n*(f*l+h*c)+l+e,-r*h,r*f,-r*(-h*l+f*c)+c+t,0,0,1),this}scale(e,t){return er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qs.makeScale(e,t)),this}rotate(e){return er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qs.makeRotation(-e)),this}translate(e,t){return er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Oo.prototype.isMatrix3=!0;let st=Oo;const qs=new st,fl=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dl=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vf(){const i={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(r,a,l){return this.enabled===!1||a===l||!a||!l||(this.spaces[a].transfer===Tt&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[a].primaries!==this.spaces[l].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[l].fromXYZ)),this.spaces[l].transfer===Tt&&(r.r=nr(r.r),r.g=nr(r.g),r.b=nr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?xs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,l){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[l].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return er("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return er("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vs]:{primaries:e,whitePoint:n,transfer:xs,toXYZ:fl,fromXYZ:dl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:fl,fromXYZ:dl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}const _t=vf();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class xf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fi===void 0&&(Fi=Ms("canvas")),Fi.width=e.width,Fi.height=e.height;const r=Fi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=Jn(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Jn(t[n]/255)*255):t[n]=Jn(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mf=0;class Co{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(Ys(r[l].image)):a.push(Ys(r[l]))}else a=Ys(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ys(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let Sf=0;const $s=new k;class tn extends gi{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Kn,r=Kn,a=en,l=Ti,c=Cn,f=dn,h=tn.DEFAULT_ANISOTROPY,_=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=or(),this.name="",this.source=new Co(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=f,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($s).x}get height(){return this.source.getSize($s).y}get depth(){return this.source.getSize($s).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ia:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ia:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Sc;tn.DEFAULT_ANISOTROPY=1;const Bo=class Bo{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const f=e.elements,h=f[0],_=f[4],v=f[8],p=f[1],M=f[5],b=f[9],A=f[2],x=f[6],m=f[10];if(Math.abs(_-p)<.01&&Math.abs(v-A)<.01&&Math.abs(b-x)<.01){if(Math.abs(_+p)<.1&&Math.abs(v+A)<.1&&Math.abs(b+x)<.1&&Math.abs(h+M+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(h+1)/2,w=(M+1)/2,I=(m+1)/2,C=(_+p)/4,N=(v+A)/4,E=(b+x)/4;return F>w&&F>I?F<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(F),r=C/n,a=N/n):w>I?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=C/r,a=E/r):I<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(I),n=N/a,r=E/a),this.set(n,r,a,t),this}let U=Math.sqrt((x-b)*(x-b)+(v-A)*(v-A)+(p-_)*(p-_));return Math.abs(U)<.001&&(U=1),this.x=(x-b)/U,this.y=(v-A)/U,this.z=(p-_)/U,this.w=Math.acos((h+M+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bo.prototype.isVector4=!0;let Ut=Bo;class Ef extends gi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new tn(r),l=n.count;for(let c=0;c<l;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Co(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Ef{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pc extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yf extends tn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bs=class bs{constructor(e,t,n,r,a,l,c,f,h,_,v,p,M,b,A,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,f,h,_,v,p,M,b,A,x)}set(e,t,n,r,a,l,c,f,h,_,v,p,M,b,A,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=a,m[5]=l,m[9]=c,m[13]=f,m[2]=h,m[6]=_,m[10]=v,m[14]=p,m[3]=M,m[7]=b,m[11]=A,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bs().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Oi.setFromMatrixColumn(e,0).length(),a=1/Oi.setFromMatrixColumn(e,1).length(),l=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),f=Math.cos(r),h=Math.sin(r),_=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const p=l*_,M=l*v,b=c*_,A=c*v;t[0]=f*_,t[4]=-f*v,t[8]=h,t[1]=M+b*h,t[5]=p-A*h,t[9]=-c*f,t[2]=A-p*h,t[6]=b+M*h,t[10]=l*f}else if(e.order==="YXZ"){const p=f*_,M=f*v,b=h*_,A=h*v;t[0]=p+A*c,t[4]=b*c-M,t[8]=l*h,t[1]=l*v,t[5]=l*_,t[9]=-c,t[2]=M*c-b,t[6]=A+p*c,t[10]=l*f}else if(e.order==="ZXY"){const p=f*_,M=f*v,b=h*_,A=h*v;t[0]=p-A*c,t[4]=-l*v,t[8]=b+M*c,t[1]=M+b*c,t[5]=l*_,t[9]=A-p*c,t[2]=-l*h,t[6]=c,t[10]=l*f}else if(e.order==="ZYX"){const p=l*_,M=l*v,b=c*_,A=c*v;t[0]=f*_,t[4]=b*h-M,t[8]=p*h+A,t[1]=f*v,t[5]=A*h+p,t[9]=M*h-b,t[2]=-h,t[6]=c*f,t[10]=l*f}else if(e.order==="YZX"){const p=l*f,M=l*h,b=c*f,A=c*h;t[0]=f*_,t[4]=A-p*v,t[8]=b*v+M,t[1]=v,t[5]=l*_,t[9]=-c*_,t[2]=-h*_,t[6]=M*v+b,t[10]=p-A*v}else if(e.order==="XZY"){const p=l*f,M=l*h,b=c*f,A=c*h;t[0]=f*_,t[4]=-v,t[8]=h*_,t[1]=p*v+A,t[5]=l*_,t[9]=M*v-b,t[2]=b*v-M,t[6]=c*_,t[10]=A*v+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bf,e,Tf)}lookAt(e,t,n){const r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),si.crossVectors(n,hn),si.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),si.crossVectors(n,hn)),si.normalize(),Or.crossVectors(hn,si),r[0]=si.x,r[4]=Or.x,r[8]=hn.x,r[1]=si.y,r[5]=Or.y,r[9]=hn.y,r[2]=si.z,r[6]=Or.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],f=n[8],h=n[12],_=n[1],v=n[5],p=n[9],M=n[13],b=n[2],A=n[6],x=n[10],m=n[14],U=n[3],F=n[7],w=n[11],I=n[15],C=r[0],N=r[4],E=r[8],D=r[12],G=r[1],z=r[5],ee=r[9],se=r[13],ae=r[2],j=r[6],le=r[10],X=r[14],re=r[3],ve=r[7],we=r[11],fe=r[15];return a[0]=l*C+c*G+f*ae+h*re,a[4]=l*N+c*z+f*j+h*ve,a[8]=l*E+c*ee+f*le+h*we,a[12]=l*D+c*se+f*X+h*fe,a[1]=_*C+v*G+p*ae+M*re,a[5]=_*N+v*z+p*j+M*ve,a[9]=_*E+v*ee+p*le+M*we,a[13]=_*D+v*se+p*X+M*fe,a[2]=b*C+A*G+x*ae+m*re,a[6]=b*N+A*z+x*j+m*ve,a[10]=b*E+A*ee+x*le+m*we,a[14]=b*D+A*se+x*X+m*fe,a[3]=U*C+F*G+w*ae+I*re,a[7]=U*N+F*z+w*j+I*ve,a[11]=U*E+F*ee+w*le+I*we,a[15]=U*D+F*se+w*X+I*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],f=e[9],h=e[13],_=e[2],v=e[6],p=e[10],M=e[14],b=e[3],A=e[7],x=e[11],m=e[15],U=f*M-h*p,F=c*M-h*v,w=c*p-f*v,I=l*M-h*_,C=l*p-f*_,N=l*v-c*_;return t*(A*U-x*F+m*w)-n*(b*U-x*I+m*C)+r*(b*F-A*I+m*N)-a*(b*w-A*C+x*N)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[1],l=e[5],c=e[9],f=e[2],h=e[6],_=e[10];return t*(l*_-c*h)-n*(a*_-c*f)+r*(a*h-l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],f=e[6],h=e[7],_=e[8],v=e[9],p=e[10],M=e[11],b=e[12],A=e[13],x=e[14],m=e[15],U=t*c-n*l,F=t*f-r*l,w=t*h-a*l,I=n*f-r*c,C=n*h-a*c,N=r*h-a*f,E=_*A-v*b,D=_*x-p*b,G=_*m-M*b,z=v*x-p*A,ee=v*m-M*A,se=p*m-M*x,ae=U*se-F*ee+w*z+I*G-C*D+N*E;if(ae===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/ae;return e[0]=(c*se-f*ee+h*z)*j,e[1]=(r*ee-n*se-a*z)*j,e[2]=(A*N-x*C+m*I)*j,e[3]=(p*C-v*N-M*I)*j,e[4]=(f*G-l*se-h*D)*j,e[5]=(t*se-r*G+a*D)*j,e[6]=(x*w-b*N-m*F)*j,e[7]=(_*N-p*w+M*F)*j,e[8]=(l*ee-c*G+h*E)*j,e[9]=(n*G-t*ee-a*E)*j,e[10]=(b*C-A*w+m*U)*j,e[11]=(v*w-_*C-M*U)*j,e[12]=(c*D-l*z-f*E)*j,e[13]=(t*z-n*D+r*E)*j,e[14]=(A*F-b*I-x*U)*j,e[15]=(_*I-v*F+p*U)*j,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,f=e.z,h=a*l,_=a*c;return this.set(h*l+n,h*c-r*f,h*f+r*c,0,h*c+r*f,_*c+n,_*f-r*l,0,h*f-r*c,_*f+r*l,a*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,c=t._z,f=t._w,h=a+a,_=l+l,v=c+c,p=a*h,M=a*_,b=a*v,A=l*_,x=l*v,m=c*v,U=f*h,F=f*_,w=f*v,I=n.x,C=n.y,N=n.z;return r[0]=(1-(A+m))*I,r[1]=(M+w)*I,r[2]=(b-F)*I,r[3]=0,r[4]=(M-w)*C,r[5]=(1-(p+m))*C,r[6]=(x+U)*C,r[7]=0,r[8]=(b+F)*N,r[9]=(x-U)*N,r[10]=(1-(p+A))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return n.set(1,1,1),t.identity(),this;let l=Oi.set(r[0],r[1],r[2]).length();const c=Oi.set(r[4],r[5],r[6]).length(),f=Oi.set(r[8],r[9],r[10]).length();a<0&&(l=-l),Tn.copy(this);const h=1/l,_=1/c,v=1/f;return Tn.elements[0]*=h,Tn.elements[1]*=h,Tn.elements[2]*=h,Tn.elements[4]*=_,Tn.elements[5]*=_,Tn.elements[6]*=_,Tn.elements[8]*=v,Tn.elements[9]*=v,Tn.elements[10]*=v,t.setFromRotationMatrix(Tn),n.x=l,n.y=c,n.z=f,this}makePerspective(e,t,n,r,a,l,c=Fn,f=!1){const h=this.elements,_=2*a/(t-e),v=2*a/(n-r),p=(t+e)/(t-e),M=(n+r)/(n-r);let b,A;if(f)b=a/(l-a),A=l*a/(l-a);else if(c===Fn)b=-(l+a)/(l-a),A=-2*l*a/(l-a);else if(c===Tr)b=-l/(l-a),A=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=_,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=A,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=Fn,f=!1){const h=this.elements,_=2/(t-e),v=2/(n-r),p=-(t+e)/(t-e),M=-(n+r)/(n-r);let b,A;if(f)b=1/(l-a),A=l/(l-a);else if(c===Fn)b=-2/(l-a),A=-(l+a)/(l-a);else if(c===Tr)b=-1/(l-a),A=-a/(l-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=_,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=A,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};bs.prototype.isMatrix4=!0;let Dt=bs;const Oi=new k,Tn=new Dt,bf=new k(0,0,0),Tf=new k(1,1,1),si=new k,Or=new k,hn=new k,pl=new Dt,ml=new mi;class _i{constructor(e=0,t=0,n=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],c=r[8],f=r[1],h=r[5],_=r[9],v=r[2],p=r[6],M=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(f,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(lt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-l,h)):(this._y=0,this._z=Math.atan2(f,a));break;case"ZYX":this._y=Math.asin(-lt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(p,M),this._z=Math.atan2(f,a)):(this._x=0,this._z=Math.atan2(-l,h));break;case"YZX":this._z=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-_,M),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ml.setFromEuler(this),this.setFromQuaternion(ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wf=0;const _l=new k,Bi=new mi,Wn=new Dt,Br=new k,dr=new k,Af=new k,Rf=new mi,gl=new k(1,0,0),vl=new k(0,1,0),xl=new k(0,0,1),Ml={type:"added"},Cf={type:"removed"},ki={type:"childadded",child:null},Ks={type:"childremoved",child:null};class Xt extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xt.DEFAULT_UP.clone();const e=new k,t=new _i,n=new mi,r=new k(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new st}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(gl,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return _l.copy(e).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gl,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Br.copy(e):Br.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(dr,Br,this.up):Wn.lookAt(Br,dr,this.up),this.quaternion.setFromRotationMatrix(Wn),r&&(Wn.extractRotation(r.matrixWorld),Bi.setFromRotationMatrix(Wn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ml),ki.child=e,this.dispatchEvent(ki),ki.child=null):vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cf),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ml),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(c,f){return c[f.uuid]===void 0&&(c[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const f=c.shapes;if(Array.isArray(f))for(let h=0,_=f.length;h<_;h++){const v=f[h];a(e.shapes,v)}else a(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let f=0,h=this.material.length;f<h;f++)c.push(a(e.materials,this.material[f]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const f=this.animations[c];r.animations.push(a(e.animations,f))}}if(t){const c=l(e.geometries),f=l(e.materials),h=l(e.textures),_=l(e.images),v=l(e.shapes),p=l(e.skeletons),M=l(e.animations),b=l(e.nodes);c.length>0&&(n.geometries=c),f.length>0&&(n.materials=f),h.length>0&&(n.textures=h),_.length>0&&(n.images=_),v.length>0&&(n.shapes=v),p.length>0&&(n.skeletons=p),M.length>0&&(n.animations=M),b.length>0&&(n.nodes=b)}return n.object=r,n;function l(c){const f=[];for(const h in c){const _=c[h];delete _.metadata,f.push(_)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Xt.DEFAULT_UP=new k(0,1,0);Xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ji extends Xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pf={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const c=this._targetRay,f=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){l=!0;for(const A of e.hand.values()){const x=t.getJointPose(A,n),m=this._getHandJoint(h,A);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const _=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],p=_.position.distanceTo(v.position),M=.02,b=.005;h.inputState.pinching&&p>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Pf)))}return c!==null&&(c.visible=r!==null),f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ji;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Js(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ft{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=Ao(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Js(l,a,e+1/3),this.g=Js(l,a,e),this.b=Js(l,a,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=gn){function n(a){a!==void 0&&parseFloat(a)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Jn(e.r),this.g=Jn(e.g),this.b=Jn(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return _t.workingToColorSpace(Qt.copy(this),e),Math.round(lt(Qt.r*255,0,255))*65536+Math.round(lt(Qt.g*255,0,255))*256+Math.round(lt(Qt.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Qt.copy(this),t);const n=Qt.r,r=Qt.g,a=Qt.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let f,h;const _=(c+l)/2;if(c===l)f=0,h=0;else{const v=l-c;switch(h=_<=.5?v/(l+c):v/(2-l-c),l){case n:f=(r-a)/v+(r<a?6:0);break;case r:f=(a-n)/v+2;break;case a:f=(n-r)/v+4;break}f/=6}return e.h=f,e.s=h,e.l=_,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=gn){_t.workingToColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,r=Qt.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(kr);const n=Er(ai.h,kr.h,t),r=Er(ai.s,kr.s,t),a=Er(ai.l,kr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new ft;ft.NAMES=Dc;class Df extends Xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wn=new k,Xn=new k,js=new k,qn=new k,zi=new k,Vi=new k,Sl=new k,Qs=new k,ea=new k,ta=new k,na=new Ut,ia=new Ut,ra=new Ut;class xn{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){wn.subVectors(r,t),Xn.subVectors(n,t),js.subVectors(e,t);const l=wn.dot(wn),c=wn.dot(Xn),f=wn.dot(js),h=Xn.dot(Xn),_=Xn.dot(js),v=l*h-c*c;if(v===0)return a.set(0,0,0),null;const p=1/v,M=(h*f-c*_)*p,b=(l*_-c*f)*p;return a.set(1-M-b,b,M)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,r,a,l,c,f){return this.getBarycoord(e,t,n,r,qn)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(a,qn.x),f.addScaledVector(l,qn.y),f.addScaledVector(c,qn.z),f)}static getInterpolatedAttribute(e,t,n,r,a,l){return na.setScalar(0),ia.setScalar(0),ra.setScalar(0),na.fromBufferAttribute(e,t),ia.fromBufferAttribute(e,n),ra.fromBufferAttribute(e,r),l.setScalar(0),l.addScaledVector(na,a.x),l.addScaledVector(ia,a.y),l.addScaledVector(ra,a.z),l}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),Xn.subVectors(e,t),wn.cross(Xn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),wn.cross(Xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,c;zi.subVectors(r,n),Vi.subVectors(a,n),Qs.subVectors(e,n);const f=zi.dot(Qs),h=Vi.dot(Qs);if(f<=0&&h<=0)return t.copy(n);ea.subVectors(e,r);const _=zi.dot(ea),v=Vi.dot(ea);if(_>=0&&v<=_)return t.copy(r);const p=f*v-_*h;if(p<=0&&f>=0&&_<=0)return l=f/(f-_),t.copy(n).addScaledVector(zi,l);ta.subVectors(e,a);const M=zi.dot(ta),b=Vi.dot(ta);if(b>=0&&M<=b)return t.copy(a);const A=M*h-f*b;if(A<=0&&h>=0&&b<=0)return c=h/(h-b),t.copy(n).addScaledVector(Vi,c);const x=_*b-M*v;if(x<=0&&v-_>=0&&M-b>=0)return Sl.subVectors(a,r),c=(v-_)/(v-_+(M-b)),t.copy(r).addScaledVector(Sl,c);const m=1/(x+A+p);return l=A*m,c=p*m,t.copy(n).addScaledVector(zi,l).addScaledVector(Vi,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class lr{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,An):An.fromBufferAttribute(a,l),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),Vr.subVectors(this.max,pr),Hi.subVectors(e.a,pr),Gi.subVectors(e.b,pr),Wi.subVectors(e.c,pr),oi.subVectors(Gi,Hi),li.subVectors(Wi,Gi),xi.subVectors(Hi,Wi);let t=[0,-oi.z,oi.y,0,-li.z,li.y,0,-xi.z,xi.y,oi.z,0,-oi.x,li.z,0,-li.x,xi.z,0,-xi.x,-oi.y,oi.x,0,-li.y,li.x,0,-xi.y,xi.x,0];return!sa(t,Hi,Gi,Wi,Vr)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Hi,Gi,Wi,Vr))?!1:(Hr.crossVectors(oi,li),t=[Hr.x,Hr.y,Hr.z],sa(t,Hi,Gi,Wi,Vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new k,new k,new k,new k,new k,new k,new k,new k],An=new k,zr=new lr,Hi=new k,Gi=new k,Wi=new k,oi=new k,li=new k,xi=new k,pr=new k,Vr=new k,Hr=new k,Mi=new k;function sa(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){Mi.fromArray(i,a);const c=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),f=e.dot(Mi),h=t.dot(Mi),_=n.dot(Mi);if(Math.max(-Math.max(f,h,_),Math.min(f,h,_))>c)return!1}return!0}const Bt=new k,Gr=new nt;let Lf=0;class kn extends gi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=al,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gr.fromBufferAttribute(this,t),Gr.applyMatrix3(e),this.setXY(t,Gr.x,Gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=sn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),n=sn(n,this.array),r=sn(r,this.array),a=sn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Lc extends kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ic extends kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class qt extends kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const If=new lr,mr=new k,aa=new k;class ws{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):If.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(mr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(aa)),this.expandByPoint(mr.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Uf=0;const _n=new Dt,oa=new Xt,Xi=new k,fn=new lr,_r=new lr,Wt=new k;class on extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jh(e)?Ic:Lc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new st().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return oa.lookAt(e),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const l=e[r];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new qt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];fn.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];_r.setFromBufferAttribute(c),this.morphTargetsRelative?(Wt.addVectors(fn.min,_r.min),fn.expandByPoint(Wt),Wt.addVectors(fn.max,_r.max),fn.expandByPoint(Wt)):(fn.expandByPoint(_r.min),fn.expandByPoint(_r.max))}fn.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)Wt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Wt));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],f=this.morphTargetsRelative;for(let h=0,_=c.count;h<_;h++)Wt.fromBufferAttribute(c,h),f&&(Xi.fromBufferAttribute(e,h),Wt.add(Xi)),r=Math.max(r,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;let l=this.getAttribute("tangent");(l===void 0||l.count!==n.count)&&(l=new kn(new Float32Array(4*n.count),4),this.setAttribute("tangent",l));const c=[],f=[];for(let E=0;E<n.count;E++)c[E]=new k,f[E]=new k;const h=new k,_=new k,v=new k,p=new nt,M=new nt,b=new nt,A=new k,x=new k;function m(E,D,G){h.fromBufferAttribute(n,E),_.fromBufferAttribute(n,D),v.fromBufferAttribute(n,G),p.fromBufferAttribute(a,E),M.fromBufferAttribute(a,D),b.fromBufferAttribute(a,G),_.sub(h),v.sub(h),M.sub(p),b.sub(p);const z=1/(M.x*b.y-b.x*M.y);isFinite(z)&&(A.copy(_).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(z),x.copy(v).multiplyScalar(M.x).addScaledVector(_,-b.x).multiplyScalar(z),c[E].add(A),c[D].add(A),c[G].add(A),f[E].add(x),f[D].add(x),f[G].add(x))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let E=0,D=U.length;E<D;++E){const G=U[E],z=G.start,ee=G.count;for(let se=z,ae=z+ee;se<ae;se+=3)m(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const F=new k,w=new k,I=new k,C=new k;function N(E){I.fromBufferAttribute(r,E),C.copy(I);const D=c[E];F.copy(D),F.sub(I.multiplyScalar(I.dot(D))).normalize(),w.crossVectors(C,D);const z=w.dot(f[E])<0?-1:1;l.setXYZW(E,F.x,F.y,F.z,z)}for(let E=0,D=U.length;E<D;++E){const G=U[E],z=G.start,ee=G.count;for(let se=z,ae=z+ee;se<ae;se+=3)N(e.getX(se+0)),N(e.getX(se+1)),N(e.getX(se+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,M=n.count;p<M;p++)n.setXYZ(p,0,0,0);const r=new k,a=new k,l=new k,c=new k,f=new k,h=new k,_=new k,v=new k;if(e)for(let p=0,M=e.count;p<M;p+=3){const b=e.getX(p+0),A=e.getX(p+1),x=e.getX(p+2);r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,A),l.fromBufferAttribute(t,x),_.subVectors(l,a),v.subVectors(r,a),_.cross(v),c.fromBufferAttribute(n,b),f.fromBufferAttribute(n,A),h.fromBufferAttribute(n,x),c.add(_),f.add(_),h.add(_),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(A,f.x,f.y,f.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let p=0,M=t.count;p<M;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),l.fromBufferAttribute(t,p+2),_.subVectors(l,a),v.subVectors(r,a),_.cross(v),n.setXYZ(p+0,_.x,_.y,_.z),n.setXYZ(p+1,_.x,_.y,_.z),n.setXYZ(p+2,_.x,_.y,_.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(c,f){const h=c.array,_=c.itemSize,v=c.normalized,p=new h.constructor(f.length*_);let M=0,b=0;for(let A=0,x=f.length;A<x;A++){c.isInterleavedBufferAttribute?M=f[A]*c.data.stride+c.offset:M=f[A]*_;for(let m=0;m<_;m++)p[b++]=h[M++]}return new kn(p,_,v)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,n=this.index.array,r=this.attributes;for(const c in r){const f=r[c],h=e(f,n);t.setAttribute(c,h)}const a=this.morphAttributes;for(const c in a){const f=[],h=a[c];for(let _=0,v=h.length;_<v;_++){const p=h[_],M=e(p,n);f.push(M)}t.morphAttributes[c]=f}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,f=l.length;c<f;c++){const h=l[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const h in f)f[h]!==void 0&&(e[h]=f[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const h=n[f];e.data.attributes[f]=h.toJSON(e.data)}const r={};let a=!1;for(const f in this.morphAttributes){const h=this.morphAttributes[f],_=[];for(let v=0,p=h.length;v<p;v++){const M=h[v];_.push(M.toJSON(e.data))}_.length>0&&(r[f]=_,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const h in r){const _=r[h];this.setAttribute(h,_.clone(t))}const a=e.morphAttributes;for(const h in a){const _=[],v=a[h];for(let p=0,M=v.length;p<M;p++)_.push(v[p].clone(t));this.morphAttributes[h]=_}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let h=0,_=l.length;h<_;h++){const v=l[h];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Nf=0;class cr extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=or(),this.name="",this.type="Material",this.blending=Qi,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ba,this.blendDst=Ta,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ba&&(n.blendSrc=this.blendSrc),this.blendDst!==Ta&&(n.blendDst=this.blendDst),this.blendEquation!==yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ft().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new nt().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $n=new k,la=new k,Wr=new k,ci=new k,ca=new k,Xr=new k,ua=new k;class As{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){la.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),ci.copy(this.origin).sub(la);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Wr),c=ci.dot(this.direction),f=-ci.dot(Wr),h=ci.lengthSq(),_=Math.abs(1-l*l);let v,p,M,b;if(_>0)if(v=l*f-c,p=l*c-f,b=a*_,v>=0)if(p>=-b)if(p<=b){const A=1/_;v*=A,p*=A,M=v*(v+l*p+2*c)+p*(l*v+p+2*f)+h}else p=a,v=Math.max(0,-(l*p+c)),M=-v*v+p*(p+2*f)+h;else p=-a,v=Math.max(0,-(l*p+c)),M=-v*v+p*(p+2*f)+h;else p<=-b?(v=Math.max(0,-(-l*a+c)),p=v>0?-a:Math.min(Math.max(-a,-f),a),M=-v*v+p*(p+2*f)+h):p<=b?(v=0,p=Math.min(Math.max(-a,-f),a),M=p*(p+2*f)+h):(v=Math.max(0,-(l*a+c)),p=v>0?a:Math.min(Math.max(-a,-f),a),M=-v*v+p*(p+2*f)+h);else p=l>0?-a:a,v=Math.max(0,-(l*p+c)),M=-v*v+p*(p+2*f)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,v),r&&r.copy(la).addScaledVector(Wr,p),M}intersectSphere(e,t){$n.subVectors(e.center,this.origin);const n=$n.dot(this.direction),r=$n.dot($n)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,f=n+l;return f<0?null:c<0?this.at(f,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,f;const h=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,p=this.origin;return h>=0?(n=(e.min.x-p.x)*h,r=(e.max.x-p.x)*h):(n=(e.max.x-p.x)*h,r=(e.min.x-p.x)*h),_>=0?(a=(e.min.y-p.y)*_,l=(e.max.y-p.y)*_):(a=(e.max.y-p.y)*_,l=(e.min.y-p.y)*_),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),v>=0?(c=(e.min.z-p.z)*v,f=(e.max.z-p.z)*v):(c=(e.max.z-p.z)*v,f=(e.min.z-p.z)*v),n>f||c>r)||((c>n||n!==n)&&(n=c),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,r,a){ca.subVectors(t,e),Xr.subVectors(n,e),ua.crossVectors(ca,Xr);let l=this.direction.dot(ua),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;ci.subVectors(this.origin,e);const f=c*this.direction.dot(Xr.crossVectors(ci,Xr));if(f<0)return null;const h=c*this.direction.dot(ca.cross(ci));if(h<0||f+h>l)return null;const _=-c*ci.dot(ua);return _<0?null:this.at(_/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ss extends cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const El=new Dt,Si=new As,qr=new ws,yl=new k,Yr=new k,$r=new k,Kr=new k,ha=new k,Zr=new k,bl=new k,Jr=new k;class Mn extends Xt{constructor(e=new on,t=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Zr.set(0,0,0);for(let f=0,h=a.length;f<h;f++){const _=c[f],v=a[f];_!==0&&(ha.fromBufferAttribute(v,e),l?Zr.addScaledVector(ha,_):Zr.addScaledVector(ha.sub(t),_))}t.add(Zr)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(a),Si.copy(e.ray).recast(e.near),!(qr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(qr,yl)===null||Si.origin.distanceToSquared(yl)>(e.far-e.near)**2))&&(El.copy(a).invert(),Si.copy(e.ray).applyMatrix4(El),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,c=a.index,f=a.attributes.position,h=a.attributes.uv,_=a.attributes.uv1,v=a.attributes.normal,p=a.groups,M=a.drawRange;if(c!==null)if(Array.isArray(l))for(let b=0,A=p.length;b<A;b++){const x=p[b],m=l[x.materialIndex],U=Math.max(x.start,M.start),F=Math.min(c.count,Math.min(x.start+x.count,M.start+M.count));for(let w=U,I=F;w<I;w+=3){const C=c.getX(w),N=c.getX(w+1),E=c.getX(w+2);r=jr(this,m,e,n,h,_,v,C,N,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const b=Math.max(0,M.start),A=Math.min(c.count,M.start+M.count);for(let x=b,m=A;x<m;x+=3){const U=c.getX(x),F=c.getX(x+1),w=c.getX(x+2);r=jr(this,l,e,n,h,_,v,U,F,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(l))for(let b=0,A=p.length;b<A;b++){const x=p[b],m=l[x.materialIndex],U=Math.max(x.start,M.start),F=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let w=U,I=F;w<I;w+=3){const C=w,N=w+1,E=w+2;r=jr(this,m,e,n,h,_,v,C,N,E),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const b=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let x=b,m=A;x<m;x+=3){const U=x,F=x+1,w=x+2;r=jr(this,l,e,n,h,_,v,U,F,w),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function Ff(i,e,t,n,r,a,l,c){let f;if(e.side===cn?f=n.intersectTriangle(l,a,r,!0,c):f=n.intersectTriangle(r,a,l,e.side===pi,c),f===null)return null;Jr.copy(c),Jr.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Jr);return h<t.near||h>t.far?null:{distance:h,point:Jr.clone(),object:i}}function jr(i,e,t,n,r,a,l,c,f,h){i.getVertexPosition(c,Yr),i.getVertexPosition(f,$r),i.getVertexPosition(h,Kr);const _=Ff(i,e,t,n,Yr,$r,Kr,bl);if(_){const v=new k;xn.getBarycoord(bl,Yr,$r,Kr,v),r&&(_.uv=xn.getInterpolatedAttribute(r,c,f,h,v,new nt)),a&&(_.uv1=xn.getInterpolatedAttribute(a,c,f,h,v,new nt)),l&&(_.normal=xn.getInterpolatedAttribute(l,c,f,h,v,new k),_.normal.dot(n.direction)>0&&_.normal.multiplyScalar(-1));const p={a:c,b:f,c:h,normal:new k,materialIndex:0};xn.getNormal(Yr,$r,Kr,p.normal),_.face=p,_.barycoord=v}return _}class Of extends tn{constructor(e=null,t=1,n=1,r,a,l,c,f,h=Zt,_=Zt,v,p){super(null,l,c,f,h,_,r,a,v,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fa=new k,Bf=new k,kf=new st;class hi{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=fa.subVectors(n,t).cross(Bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(fa),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return n===!0&&(l<0||l>1)?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kf.getNormalMatrix(e),r=this.coplanarPoint(fa).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ei=new ws,zf=new nt(.5,.5),Qr=new k;class Do{constructor(e=new hi,t=new hi,n=new hi,r=new hi,a=new hi,l=new hi){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){const r=this.planes,a=e.elements,l=a[0],c=a[1],f=a[2],h=a[3],_=a[4],v=a[5],p=a[6],M=a[7],b=a[8],A=a[9],x=a[10],m=a[11],U=a[12],F=a[13],w=a[14],I=a[15];if(r[0].setComponents(h-l,M-_,m-b,I-U).normalize(),r[1].setComponents(h+l,M+_,m+b,I+U).normalize(),r[2].setComponents(h+c,M+v,m+A,I+F).normalize(),r[3].setComponents(h-c,M-v,m-A,I-F).normalize(),n)r[4].setComponents(f,p,x,w).normalize(),r[5].setComponents(h-f,M-p,m-x,I-w).normalize();else if(r[4].setComponents(h-f,M-p,m-x,I-w).normalize(),t===Fn)r[5].setComponents(h+f,M+p,m+x,I+w).normalize();else if(t===Tr)r[5].setComponents(f,p,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);const t=zf.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Qr.x=r.normal.x>0?e.max.x:e.min.x,Qr.y=r.normal.y>0?e.max.y:e.min.y,Qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fo extends cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Es=new k,ys=new k,Tl=new Dt,gr=new As,es=new ws,da=new k,wl=new k;class Uc extends Xt{constructor(e=new on,t=new fo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Es.fromBufferAttribute(t,r-1),ys.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Es.distanceTo(ys);e.setAttribute("lineDistance",new qt(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(r),es.radius+=a,e.ray.intersectsSphere(es)===!1)return;Tl.copy(r).invert(),gr.copy(e.ray).applyMatrix4(Tl);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),f=c*c,h=this.isLineSegments?2:1,_=n.index,p=n.attributes.position;if(_!==null){const M=Math.max(0,l.start),b=Math.min(_.count,l.start+l.count);for(let A=M,x=b-1;A<x;A+=h){const m=_.getX(A),U=_.getX(A+1),F=ts(this,e,gr,f,m,U,A);F&&t.push(F)}if(this.isLineLoop){const A=_.getX(b-1),x=_.getX(M),m=ts(this,e,gr,f,A,x,b-1);m&&t.push(m)}}else{const M=Math.max(0,l.start),b=Math.min(p.count,l.start+l.count);for(let A=M,x=b-1;A<x;A+=h){const m=ts(this,e,gr,f,A,A+1,A);m&&t.push(m)}if(this.isLineLoop){const A=ts(this,e,gr,f,b-1,M,b-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function ts(i,e,t,n,r,a,l){const c=i.geometry.attributes.position;if(Es.fromBufferAttribute(c,r),ys.fromBufferAttribute(c,a),t.distanceSqToSegment(Es,ys,da,wl)>n)return;da.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(da);if(!(h<e.near||h>e.far))return{distance:h,point:wl.clone().applyMatrix4(i.matrixWorld),index:l,face:null,faceIndex:null,barycoord:null,object:i}}const Al=new k,Rl=new k;class Vf extends Uc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Al.fromBufferAttribute(t,r),Rl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Al.distanceTo(Rl);e.setAttribute("lineDistance",new qt(n,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nc extends tn{constructor(e=[],t=Ai,n,r,a,l,c,f,h,_){super(e,t,n,r,a,l,c,f,h,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Hf extends tn{constructor(e,t,n,r,a,l,c,f,h){super(e,t,n,r,a,l,c,f,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sr extends tn{constructor(e,t,n=zn,r,a,l,c=Zt,f=Zt,h,_=Qn,v=1){if(_!==Qn&&_!==wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:v};super(p,r,a,l,c,f,_,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Co(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gf extends sr{constructor(e,t=zn,n=Ai,r,a,l=Zt,c=Zt,f,h=Qn){const _={width:e,height:e,depth:1},v=[_,_,_,_,_,_];super(e,e,t,n,r,a,l,c,f,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fc extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ar extends on{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const f=[],h=[],_=[],v=[];let p=0,M=0;b("z","y","x",-1,-1,n,t,e,l,a,0),b("z","y","x",1,-1,n,t,-e,l,a,1),b("x","z","y",1,1,e,n,t,r,l,2),b("x","z","y",1,-1,e,n,-t,r,l,3),b("x","y","z",1,-1,e,t,n,r,a,4),b("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(f),this.setAttribute("position",new qt(h,3)),this.setAttribute("normal",new qt(_,3)),this.setAttribute("uv",new qt(v,2));function b(A,x,m,U,F,w,I,C,N,E,D){const G=w/N,z=I/E,ee=w/2,se=I/2,ae=C/2,j=N+1,le=E+1;let X=0,re=0;const ve=new k;for(let we=0;we<le;we++){const fe=we*z-se;for(let ge=0;ge<j;ge++){const Ne=ge*G-ee;ve[A]=Ne*U,ve[x]=fe*F,ve[m]=ae,h.push(ve.x,ve.y,ve.z),ve[A]=0,ve[x]=0,ve[m]=C>0?1:-1,_.push(ve.x,ve.y,ve.z),v.push(ge/N),v.push(1-we/E),X+=1}}for(let we=0;we<E;we++)for(let fe=0;fe<N;fe++){const ge=p+fe+j*we,Ne=p+fe+j*(we+1),Me=p+(fe+1)+j*(we+1),He=p+(fe+1)+j*we;f.push(ge,Ne,He),f.push(Ne,Me,He),re+=6}c.addGroup(M,re,D),M+=re,p+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const ns=new k,is=new k,pa=new k,rs=new xn;class Wf extends on{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),a=Math.cos(tr*t),l=e.getIndex(),c=e.getAttribute("position"),f=l?l.count:c.count,h=[0,0,0],_=["a","b","c"],v=new Array(3),p={},M=[];for(let b=0;b<f;b+=3){l?(h[0]=l.getX(b),h[1]=l.getX(b+1),h[2]=l.getX(b+2)):(h[0]=b,h[1]=b+1,h[2]=b+2);const{a:A,b:x,c:m}=rs;if(A.fromBufferAttribute(c,h[0]),x.fromBufferAttribute(c,h[1]),m.fromBufferAttribute(c,h[2]),rs.getNormal(pa),v[0]=`${Math.round(A.x*r)},${Math.round(A.y*r)},${Math.round(A.z*r)}`,v[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,v[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let U=0;U<3;U++){const F=(U+1)%3,w=v[U],I=v[F],C=rs[_[U]],N=rs[_[F]],E=`${w}_${I}`,D=`${I}_${w}`;D in p&&p[D]?(pa.dot(p[D].normal)<=a&&(M.push(C.x,C.y,C.z),M.push(N.x,N.y,N.z)),p[D]=null):E in p||(p[E]={index0:h[U],index1:h[F],normal:pa.clone()})}}for(const b in p)if(p[b]){const{index0:A,index1:x}=p[b];ns.fromBufferAttribute(c,A),is.fromBufferAttribute(c,x),M.push(ns.x,ns.y,ns.z),M.push(is.x,is.y,is.z)}this.setAttribute("position",new qt(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Rs extends on{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,c=Math.floor(n),f=Math.floor(r),h=c+1,_=f+1,v=e/c,p=t/f,M=[],b=[],A=[],x=[];for(let m=0;m<_;m++){const U=m*p-l;for(let F=0;F<h;F++){const w=F*v-a;b.push(w,-U,0),A.push(0,0,1),x.push(F/c),x.push(1-m/f)}}for(let m=0;m<f;m++)for(let U=0;U<c;U++){const F=U+h*m,w=U+h*(m+1),I=U+1+h*(m+1),C=U+1+h*m;M.push(F,w,C),M.push(w,I,C)}this.setIndex(M),this.setAttribute("position",new qt(b,3)),this.setAttribute("normal",new qt(A,3)),this.setAttribute("uv",new qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lo extends on{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:l,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(l+c,Math.PI);let h=0;const _=[],v=new k,p=new k,M=[],b=[],A=[],x=[];for(let m=0;m<=n;m++){const U=[],F=m/n,w=l+F*c,I=e*Math.cos(w),C=Math.sqrt(e*e-I*I);let N=0;m===0&&l===0?N=.5/t:m===n&&f===Math.PI&&(N=-.5/t);for(let E=0;E<=t;E++){const D=E/t,G=r+D*a;v.x=-C*Math.cos(G),v.y=I,v.z=C*Math.sin(G),b.push(v.x,v.y,v.z),p.copy(v).normalize(),A.push(p.x,p.y,p.z),x.push(D+N,1-F),U.push(h++)}_.push(U)}for(let m=0;m<n;m++)for(let U=0;U<t;U++){const F=_[m][U+1],w=_[m][U],I=_[m+1][U],C=_[m+1][U+1];(m!==0||l>0)&&M.push(F,w,C),(m!==n-1||f<Math.PI)&&M.push(w,I,C)}this.setIndex(M),this.setAttribute("position",new qt(b,3)),this.setAttribute("normal",new qt(A,3)),this.setAttribute("uv",new qt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Cl(r))r.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Cl(r[0])){const a=[];for(let l=0,c=r.length;l<c;l++)a[l]=r[l].clone();e[t][n]=a}else e[t][n]=r.slice();else e[t][n]=r}}return e}function an(i){const e={};for(let t=0;t<i.length;t++){const n=ar(i[t]);for(const r in n)e[r]=n[r]}return e}function Cl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Oc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const qf={clone:ar,merge:an};var Yf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$f=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends cr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yf,this.fragmentShader=$f,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=Xf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new ft().setHex(r.value);break;case"v2":this.uniforms[n].value=new nt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new k().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ut().fromArray(r.value);break;case"m3":this.uniforms[n].value=new st().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Dt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Kf extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zf extends cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jf extends cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jf extends cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bc extends Xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class Qf extends Bc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ft(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ma=new Dt,Pl=new k,Dl=new k;class ed{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Do,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pl),Dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dl),t.updateMatrixWorld(),ma.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ma,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Tr||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ma)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ss=new k,as=new mi,Ln=new k;class kc extends Xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ss,as,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ss,as,Ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ss,as,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ss,as,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ui=new k,Ll=new nt,Il=new nt;class vn extends kc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Ll,Il),t.subVectors(Il,Ll)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const f=l.fullWidth,h=l.fullHeight;a+=l.offsetX*r/f,t-=l.offsetY*n/h,r*=l.width/f,n*=l.height/h}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Io extends kc{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,l=a+h*this.view.width,c-=_*this.view.offsetY,f=c-_*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class td extends ed{constructor(){super(new Io(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ul extends Bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Xt.DEFAULT_UP),this.updateMatrix(),this.target=new Xt,this.shadow=new td}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const qi=-90,Yi=1;class nd extends Xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(qi,Yi,e,t);r.layers=this.layers,this.add(r);const a=new vn(qi,Yi,e,t);a.layers=this.layers,this.add(a);const l=new vn(qi,Yi,e,t);l.layers=this.layers,this.add(l);const c=new vn(qi,Yi,e,t);c.layers=this.layers,this.add(c);const f=new vn(qi,Yi,e,t);f.layers=this.layers,this.add(f);const h=new vn(qi,Yi,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,f]=t;for(const h of t)this.remove(h);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,f,h,_]=this.children,v=e.getRenderTarget(),p=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(n,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(v,p,M),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class id extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Nl=new Dt;class rd{constructor(e,t,n=0,r=1/0){this.ray=new As(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):vt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nl),this}intersectObject(e,t=!0,n=[]){return po(e,this,n,t),n.sort(Fl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)po(e[r],this,n,t);return n.sort(Fl),n}}function Fl(i,e){return i.distance-e.distance}function po(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let l=0,c=a.length;l<c;l++)po(a[l],e,t,!0)}}class Ol{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ko=class ko{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=n,a[3]=r,this}};ko.prototype.isMatrix2=!0;let Bl=ko;class sd extends gi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Je("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function kl(i,e,t,n){const r=ad(n);switch(t){case wc:return i*e;case Rc:return i*e/r.components*r.byteLength;case Eo:return i*e/r.components*r.byteLength;case Ri:return i*e*2/r.components*r.byteLength;case yo:return i*e*2/r.components*r.byteLength;case Ac:return i*e*3/r.components*r.byteLength;case Cn:return i*e*4/r.components*r.byteLength;case bo:return i*e*4/r.components*r.byteLength;case hs:case fs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ds:case ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Ba:return Math.max(i,16)*Math.max(e,8)/4;case Na:case Oa:return Math.max(i,8)*Math.max(e,8)/2;case ka:case za:case Ha:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Va:case _s:case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case so:case ao:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lo:case co:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gs:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ad(i){switch(i){case dn:case Ec:return{byteLength:1,components:1};case yr:case yc:case jn:return{byteLength:2,components:1};case Mo:case So:return{byteLength:2,components:4};case zn:case xo:case Nn:return{byteLength:4,components:1};case bc:case Tc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vo}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zc(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function od(i){const e=new WeakMap;function t(c,f){const h=c.array,_=c.usage,v=h.byteLength,p=i.createBuffer();i.bindBuffer(f,p),i.bufferData(f,h,_),c.onUploadCallback();let M;if(h instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=i.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=i.SHORT;else if(h instanceof Uint32Array)M=i.UNSIGNED_INT;else if(h instanceof Int32Array)M=i.INT;else if(h instanceof Int8Array)M=i.BYTE;else if(h instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:v}}function n(c,f,h){const _=f.array,v=f.updateRanges;if(i.bindBuffer(h,c),v.length===0)i.bufferSubData(h,0,_);else{v.sort((M,b)=>M.start-b.start);let p=0;for(let M=1;M<v.length;M++){const b=v[p],A=v[M];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++p,v[p]=A)}v.length=p+1;for(let M=0,b=v.length;M<b;M++){const A=v[M];i.bufferSubData(h,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=e.get(c);f&&(i.deleteBuffer(f.buffer),e.delete(c))}function l(c,f){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const _=e.get(c);(!_||_.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,f));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,c,f),h.version=c.version}}return{get:r,remove:a,update:l}}var ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_d=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ld=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Id=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",kd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ep=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,np=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ap=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,up=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Bp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,im=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_m=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Em=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,km=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:ld,alphahash_pars_fragment:cd,alphamap_fragment:ud,alphamap_pars_fragment:hd,alphatest_fragment:fd,alphatest_pars_fragment:dd,aomap_fragment:pd,aomap_pars_fragment:md,batching_pars_vertex:_d,batching_vertex:gd,begin_vertex:vd,beginnormal_vertex:xd,bsdfs:Md,iridescence_fragment:Sd,bumpmap_pars_fragment:Ed,clipping_planes_fragment:yd,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:Td,clipping_planes_vertex:wd,color_fragment:Ad,color_pars_fragment:Rd,color_pars_vertex:Cd,color_vertex:Pd,common:Dd,cube_uv_reflection_fragment:Ld,defaultnormal_vertex:Id,displacementmap_pars_vertex:Ud,displacementmap_vertex:Nd,emissivemap_fragment:Fd,emissivemap_pars_fragment:Od,colorspace_fragment:Bd,colorspace_pars_fragment:kd,envmap_fragment:zd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Hd,envmap_pars_vertex:Gd,envmap_physical_pars_fragment:ep,envmap_vertex:Wd,fog_vertex:Xd,fog_pars_vertex:qd,fog_fragment:Yd,fog_pars_fragment:$d,gradientmap_pars_fragment:Kd,lightmap_pars_fragment:Zd,lights_lambert_fragment:Jd,lights_lambert_pars_fragment:jd,lights_pars_begin:Qd,lights_toon_fragment:tp,lights_toon_pars_fragment:np,lights_phong_fragment:ip,lights_phong_pars_fragment:rp,lights_physical_fragment:sp,lights_physical_pars_fragment:ap,lights_fragment_begin:op,lights_fragment_maps:lp,lights_fragment_end:cp,lightprobes_pars_fragment:up,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:pp,map_fragment:mp,map_pars_fragment:_p,map_particle_fragment:gp,map_particle_pars_fragment:vp,metalnessmap_fragment:xp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:Sp,morphcolor_vertex:Ep,morphnormal_vertex:yp,morphtarget_pars_vertex:bp,morphtarget_vertex:Tp,normal_fragment_begin:wp,normal_fragment_maps:Ap,normal_pars_fragment:Rp,normal_pars_vertex:Cp,normal_vertex:Pp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Lp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Np,opaque_fragment:Fp,packing:Op,premultiplied_alpha_fragment:Bp,project_vertex:kp,dithering_fragment:zp,dithering_pars_fragment:Vp,roughnessmap_fragment:Hp,roughnessmap_pars_fragment:Gp,shadowmap_pars_fragment:Wp,shadowmap_pars_vertex:Xp,shadowmap_vertex:qp,shadowmask_pars_fragment:Yp,skinbase_vertex:$p,skinning_pars_vertex:Kp,skinning_vertex:Zp,skinnormal_vertex:Jp,specularmap_fragment:jp,specularmap_pars_fragment:Qp,tonemapping_fragment:em,tonemapping_pars_fragment:tm,transmission_fragment:nm,transmission_pars_fragment:im,uv_pars_fragment:rm,uv_pars_vertex:sm,uv_vertex:am,worldpos_vertex:om,background_vert:lm,background_frag:cm,backgroundCube_vert:um,backgroundCube_frag:hm,cube_vert:fm,cube_frag:dm,depth_vert:pm,depth_frag:mm,distance_vert:_m,distance_frag:gm,equirect_vert:vm,equirect_frag:xm,linedashed_vert:Mm,linedashed_frag:Sm,meshbasic_vert:Em,meshbasic_frag:ym,meshlambert_vert:bm,meshlambert_frag:Tm,meshmatcap_vert:wm,meshmatcap_frag:Am,meshnormal_vert:Rm,meshnormal_frag:Cm,meshphong_vert:Pm,meshphong_frag:Dm,meshphysical_vert:Lm,meshphysical_frag:Im,meshtoon_vert:Um,meshtoon_frag:Nm,points_vert:Fm,points_frag:Om,shadow_vert:Bm,shadow_frag:km,sprite_vert:zm,sprite_frag:Vm},Ce={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Un={basic:{uniforms:an([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:an([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:an([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:an([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:an([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ft(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:an([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:an([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:an([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:an([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:an([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:an([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:an([Ce.common,Ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:an([Ce.lights,Ce.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Un.physical={uniforms:an([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const os={r:0,b:0,g:0},Hm=new Dt,Vc=new st;Vc.set(-1,0,0,0,1,0,0,0,1);function Gm(i,e,t,n,r,a){const l=new ft(0);let c=r===!0?0:1,f,h,_=null,v=0,p=null;function M(U){let F=U.isScene===!0?U.background:null;if(F&&F.isTexture){const w=U.backgroundBlurriness>0;F=e.get(F,w)}return F}function b(U){let F=!1;const w=M(U);w===null?x(l,c):w&&w.isColor&&(x(w,1),F=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(U,F){const w=M(F);w&&(w.isCubeTexture||w.mapping===Ts)?(h===void 0&&(h=new Mn(new Ar(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:ar(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hm.makeRotationFromEuler(F.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Vc),h.material.toneMapped=_t.getTransfer(w.colorSpace)!==Tt,(_!==w||v!==w.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,_=w,v=w.version,p=i.toneMapping),h.layers.enableAll(),U.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(f===void 0&&(f=new Mn(new Rs(2,2),new Vn({name:"BackgroundMaterial",uniforms:ar(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(f)),f.material.uniforms.t2D.value=w,f.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,f.material.toneMapped=_t.getTransfer(w.colorSpace)!==Tt,w.matrixAutoUpdate===!0&&w.updateMatrix(),f.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||v!==w.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,_=w,v=w.version,p=i.toneMapping),f.layers.enableAll(),U.unshift(f,f.geometry,f.material,0,0,null))}function x(U,F){U.getRGB(os,Oc(i)),t.buffers.color.setClear(os.r,os.g,os.b,F,a)}function m(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return l},setClearColor:function(U,F=1){l.set(U),c=F,x(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(U){c=U,x(l,c)},render:b,addToRenderList:A,dispose:m}}function Wm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let a=r,l=!1;function c(z,ee,se,ae,j){let le=!1;const X=v(z,ae,se,ee);a!==X&&(a=X,h(a.object)),le=M(z,ae,se,j),le&&b(z,ae,se,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(le||l)&&(l=!1,w(z,ee,se,ae),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function f(){return i.createVertexArray()}function h(z){return i.bindVertexArray(z)}function _(z){return i.deleteVertexArray(z)}function v(z,ee,se,ae){const j=ae.wireframe===!0;let le=n[ee.id];le===void 0&&(le={},n[ee.id]=le);const X=z.isInstancedMesh===!0?z.id:0;let re=le[X];re===void 0&&(re={},le[X]=re);let ve=re[se.id];ve===void 0&&(ve={},re[se.id]=ve);let we=ve[j];return we===void 0&&(we=p(f()),ve[j]=we),we}function p(z){const ee=[],se=[],ae=[];for(let j=0;j<t;j++)ee[j]=0,se[j]=0,ae[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:se,attributeDivisors:ae,object:z,attributes:{},index:null}}function M(z,ee,se,ae){const j=a.attributes,le=ee.attributes;let X=0;const re=se.getAttributes();for(const ve in re)if(re[ve].location>=0){const fe=j[ve];let ge=le[ve];if(ge===void 0&&(ve==="instanceMatrix"&&z.instanceMatrix&&(ge=z.instanceMatrix),ve==="instanceColor"&&z.instanceColor&&(ge=z.instanceColor)),fe===void 0||fe.attribute!==ge||ge&&fe.data!==ge.data)return!0;X++}return a.attributesNum!==X||a.index!==ae}function b(z,ee,se,ae){const j={},le=ee.attributes;let X=0;const re=se.getAttributes();for(const ve in re)if(re[ve].location>=0){let fe=le[ve];fe===void 0&&(ve==="instanceMatrix"&&z.instanceMatrix&&(fe=z.instanceMatrix),ve==="instanceColor"&&z.instanceColor&&(fe=z.instanceColor));const ge={};ge.attribute=fe,fe&&fe.data&&(ge.data=fe.data),j[ve]=ge,X++}a.attributes=j,a.attributesNum=X,a.index=ae}function A(){const z=a.newAttributes;for(let ee=0,se=z.length;ee<se;ee++)z[ee]=0}function x(z){m(z,0)}function m(z,ee){const se=a.newAttributes,ae=a.enabledAttributes,j=a.attributeDivisors;se[z]=1,ae[z]===0&&(i.enableVertexAttribArray(z),ae[z]=1),j[z]!==ee&&(i.vertexAttribDivisor(z,ee),j[z]=ee)}function U(){const z=a.newAttributes,ee=a.enabledAttributes;for(let se=0,ae=ee.length;se<ae;se++)ee[se]!==z[se]&&(i.disableVertexAttribArray(se),ee[se]=0)}function F(z,ee,se,ae,j,le,X){X===!0?i.vertexAttribIPointer(z,ee,se,j,le):i.vertexAttribPointer(z,ee,se,ae,j,le)}function w(z,ee,se,ae){A();const j=ae.attributes,le=se.getAttributes(),X=ee.defaultAttributeValues;for(const re in le){const ve=le[re];if(ve.location>=0){let we=j[re];if(we===void 0&&(re==="instanceMatrix"&&z.instanceMatrix&&(we=z.instanceMatrix),re==="instanceColor"&&z.instanceColor&&(we=z.instanceColor)),we!==void 0){const fe=we.normalized,ge=we.itemSize,Ne=e.get(we);if(Ne===void 0)continue;const Me=Ne.buffer,He=Ne.type,K=Ne.bytesPerElement,me=He===i.INT||He===i.UNSIGNED_INT||we.gpuType===xo;if(we.isInterleavedBufferAttribute){const ue=we.data,Pe=ue.stride,ke=we.offset;if(ue.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ve.locationSize;Ge++)m(ve.location+Ge,ue.meshPerAttribute);z.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ge=0;Ge<ve.locationSize;Ge++)x(ve.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ge=0;Ge<ve.locationSize;Ge++)F(ve.location+Ge,ge/ve.locationSize,He,fe,Pe*K,(ke+ge/ve.locationSize*Ge)*K,me)}else{if(we.isInstancedBufferAttribute){for(let ue=0;ue<ve.locationSize;ue++)m(ve.location+ue,we.meshPerAttribute);z.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ue=0;ue<ve.locationSize;ue++)x(ve.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let ue=0;ue<ve.locationSize;ue++)F(ve.location+ue,ge/ve.locationSize,He,fe,ge*K,ge/ve.locationSize*ue*K,me)}}else if(X!==void 0){const fe=X[re];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(ve.location,fe);break;case 3:i.vertexAttrib3fv(ve.location,fe);break;case 4:i.vertexAttrib4fv(ve.location,fe);break;default:i.vertexAttrib1fv(ve.location,fe)}}}}U()}function I(){D();for(const z in n){const ee=n[z];for(const se in ee){const ae=ee[se];for(const j in ae){const le=ae[j];for(const X in le)_(le[X].object),delete le[X];delete ae[j]}}delete n[z]}}function C(z){if(n[z.id]===void 0)return;const ee=n[z.id];for(const se in ee){const ae=ee[se];for(const j in ae){const le=ae[j];for(const X in le)_(le[X].object),delete le[X];delete ae[j]}}delete n[z.id]}function N(z){for(const ee in n){const se=n[ee];for(const ae in se){const j=se[ae];if(j[z.id]===void 0)continue;const le=j[z.id];for(const X in le)_(le[X].object),delete le[X];delete j[z.id]}}}function E(z){for(const ee in n){const se=n[ee],ae=z.isInstancedMesh===!0?z.id:0,j=se[ae];if(j!==void 0){for(const le in j){const X=j[le];for(const re in X)_(X[re].object),delete X[re];delete j[le]}delete se[ae],Object.keys(se).length===0&&delete n[ee]}}}function D(){G(),l=!0,a!==r&&(a=r,h(a.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:D,resetDefaultState:G,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:N,initAttributes:A,enableAttribute:x,disableUnusedAttributes:U}}function Xm(i,e,t){let n;function r(f){n=f}function a(f,h){i.drawArrays(n,f,h),t.update(h,n,1)}function l(f,h,_){_!==0&&(i.drawArraysInstanced(n,f,h,_),t.update(h,n,_))}function c(f,h,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,h,0,_);let p=0;for(let M=0;M<_;M++)p+=h[M];t.update(p,n,1)}this.setMode=r,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function qm(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function l(N){return!(N!==Cn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(N){const E=N===jn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==dn&&n.convert(N)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Nn&&!E)}function f(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const _=f(h);_!==h&&(Je("WebGLRenderer:",h,"not supported, using",_,"instead."),h=_);const v=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),F=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:f,textureFormatReadable:l,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:p,maxTextures:M,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:U,maxVaryings:F,maxFragmentUniforms:w,maxSamples:I,samples:C}}function Ym(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new hi,c=new st,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(v,p){const M=v.length!==0||p||n!==0||r;return r=p,n=v.length,M},this.beginShadows=function(){a=!0,_(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,p){t=_(v,p,0)},this.setState=function(v,p,M){const b=v.clippingPlanes,A=v.clipIntersection,x=v.clipShadows,m=i.get(v);if(!r||b===null||b.length===0||a&&!x)a?_(null):h();else{const U=a?0:n,F=U*4;let w=m.clippingState||null;f.value=w,w=_(b,p,F,M);for(let I=0;I!==F;++I)w[I]=t[I];m.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function h(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function _(v,p,M,b){const A=v!==null?v.length:0;let x=null;if(A!==0){if(x=f.value,b!==!0||x===null){const m=M+A*4,U=p.matrixWorldInverse;c.getNormalMatrix(U),(x===null||x.length<m)&&(x=new Float32Array(m));for(let F=0,w=M;F!==A;++F,w+=4)l.copy(v[F]).applyMatrix4(U,c),l.normal.toArray(x,w),x[w+3]=l.constant}f.value=x,f.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}const di=4,zl=[.125,.215,.35,.446,.526,.582],bi=20,$m=256,vr=new Io,Vl=new ft;let _a=null,ga=0,va=0,xa=!1;const Km=new k;class Hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:l=256,position:c=Km}=a;_a=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(l);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,r,f,c),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_a,ga,va),this._renderer.xr.enabled=xa,e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_a=this._renderer.getRenderTarget(),ga=this._renderer.getActiveCubeFace(),va=this._renderer.getActiveMipmapLevel(),xa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:jn,format:Cn,colorSpace:vs,depthBuffer:!1},r=Gl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gl(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zm(a)),this._blurMaterial=jm(a,e,t),this._ggxMaterial=Jm(a,e,t)}return r}_compileMaterial(e){const t=new Mn(new on,e);this._renderer.compile(t,vr)}_sceneToCubeUV(e,t,n,r,a){const f=new vn(90,1,t,n),h=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,p=v.autoClear,M=v.toneMapping;v.getClearColor(Vl),v.toneMapping=On,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(r),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new Ar,new Ss({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,x=A.material;let m=!1;const U=e.background;U?U.isColor&&(x.color.copy(U),e.background=null,m=!0):(x.color.copy(Vl),m=!0);for(let F=0;F<6;F++){const w=F%3;w===0?(f.up.set(0,h[F],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x+_[F],a.y,a.z)):w===1?(f.up.set(0,0,h[F]),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y+_[F],a.z)):(f.up.set(0,h[F],0),f.position.set(a.x,a.y,a.z),f.lookAt(a.x,a.y,a.z+_[F]));const I=this._cubeSize;$i(r,w*I,F>2?I:0,I,I),v.setRenderTarget(r),m&&v.render(A,f),v.render(e,f)}v.toneMapping=M,v.autoClear=p,e.background=U}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ai||e.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const a=r?this._cubemapMaterial:this._equirectMaterial,l=this._lodMeshes[0];l.material=a;const c=a.uniforms;c.envMap.value=e;const f=this._cubeSize;$i(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(l,vr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,l=this._ggxMaterial,c=this._lodMeshes[n];c.material=l;const f=l.uniforms,h=n/(this._lodMeshes.length-1),_=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-_*_),p=0+h*1.25,M=v*p,{_lodMax:b}=this,A=this._sizeLods[n],x=3*A*(n>b-di?n-b+di:0),m=4*(this._cubeSize-A);f.envMap.value=e.texture,f.roughness.value=M,f.mipInt.value=b-t,$i(a,x,m,3*A,2*A),r.setRenderTarget(a),r.render(c,vr),f.envMap.value=a.texture,f.roughness.value=0,f.mipInt.value=b-n,$i(e,x,m,3*A,2*A),r.setRenderTarget(e),r.render(c,vr)}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,c){const f=this._renderer,h=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&vt("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[r];v.material=h;const p=h.uniforms,M=this._sizeLods[n]-1,b=isFinite(a)?Math.PI/(2*M):2*Math.PI/(2*bi-1),A=a/b,x=isFinite(a)?1+Math.floor(_*A):bi;x>bi&&Je(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${bi}`);const m=[];let U=0;for(let N=0;N<bi;++N){const E=N/A,D=Math.exp(-E*E/2);m.push(D),N===0?U+=D:N<x&&(U+=2*D)}for(let N=0;N<m.length;N++)m[N]=m[N]/U;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=m,p.latitudinal.value=l==="latitudinal",c&&(p.poleAxis.value=c);const{_lodMax:F}=this;p.dTheta.value=b,p.mipInt.value=F-n;const w=this._sizeLods[r],I=3*w*(r>F-di?r-F+di:0),C=4*(this._cubeSize-w);$i(t,I,C,3*w,2*w),f.setRenderTarget(t),f.render(v,vr)}}function Zm(i){const e=[],t=[],n=[];let r=i;const a=i-di+1+zl.length;for(let l=0;l<a;l++){const c=Math.pow(2,r);e.push(c);let f=1/c;l>i-di?f=zl[l-i+di-1]:l===0&&(f=0),t.push(f);const h=1/(c-2),_=-h,v=1+h,p=[_,_,v,_,v,v,_,_,v,v,_,v],M=6,b=6,A=3,x=2,m=1,U=new Float32Array(A*b*M),F=new Float32Array(x*b*M),w=new Float32Array(m*b*M);for(let C=0;C<M;C++){const N=C%3*2/3-1,E=C>2?0:-1,D=[N,E,0,N+2/3,E,0,N+2/3,E+1,0,N,E,0,N+2/3,E+1,0,N,E+1,0];U.set(D,A*b*C),F.set(p,x*b*C);const G=[C,C,C,C,C,C];w.set(G,m*b*C)}const I=new on;I.setAttribute("position",new kn(U,A)),I.setAttribute("uv",new kn(F,x)),I.setAttribute("faceIndex",new kn(w,m)),n.push(new Mn(I,null)),r>di&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Gl(i,e,t){const n=new Bn(i,e,t);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Jm(i,e,t){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$m,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function jm(i,e,t){const n=new Float32Array(bi),r=new k(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Wl(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Xl(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Cs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Hc extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Nc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ar(5,5,5),a=new Vn({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Zn});a.uniforms.tEquirect.value=t;const l=new Mn(r,a),c=t.minFilter;return t.minFilter===Ti&&(t.minFilter=en),new nd(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}function Qm(i){let e=new WeakMap,t=new WeakMap,n=null;function r(p,M=!1){return p==null?null:M?l(p):a(p)}function a(p){if(p&&p.isTexture){const M=p.mapping;if(M===Hs||M===Gs)if(e.has(p)){const b=e.get(p).texture;return c(b,p.mapping)}else{const b=p.image;if(b&&b.height>0){const A=new Hc(b.height);return A.fromEquirectangularTexture(i,p),e.set(p,A),p.addEventListener("dispose",h),c(A.texture,p.mapping)}else return null}}return p}function l(p){if(p&&p.isTexture){const M=p.mapping,b=M===Hs||M===Gs,A=M===Ai||M===rr;if(b||A){let x=t.get(p);const m=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==m)return n===null&&(n=new Hl(i)),x=b?n.fromEquirectangular(p,x):n.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),x.texture;if(x!==void 0)return x.texture;{const U=p.image;return b&&U&&U.height>0||A&&U&&f(U)?(n===null&&(n=new Hl(i)),x=b?n.fromEquirectangular(p):n.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,t.set(p,x),p.addEventListener("dispose",_),x.texture):null}}}return p}function c(p,M){return M===Hs?p.mapping=Ai:M===Gs&&(p.mapping=rr),p}function f(p){let M=0;const b=6;for(let A=0;A<b;A++)p[A]!==void 0&&M++;return M===b}function h(p){const M=p.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function _(p){const M=p.target;M.removeEventListener("dispose",_);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function v(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:v}}function e_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&er("WebGLRenderer: "+n+" extension not supported."),r}}}function t_(i,e,t,n){const r={},a=new WeakMap;function l(v){const p=v.target;p.index!==null&&e.remove(p.index);for(const b in p.attributes)e.remove(p.attributes[b]);p.removeEventListener("dispose",l),delete r[p.id];const M=a.get(p);M&&(e.remove(M),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(v,p){return r[p.id]===!0||(p.addEventListener("dispose",l),r[p.id]=!0,t.memory.geometries++),p}function f(v){const p=v.attributes;for(const M in p)e.update(p[M],i.ARRAY_BUFFER)}function h(v){const p=[],M=v.index,b=v.attributes.position;let A=0;if(b===void 0)return;if(M!==null){const U=M.array;A=M.version;for(let F=0,w=U.length;F<w;F+=3){const I=U[F+0],C=U[F+1],N=U[F+2];p.push(I,C,C,N,N,I)}}else{const U=b.array;A=b.version;for(let F=0,w=U.length/3-1;F<w;F+=3){const I=F+0,C=F+1,N=F+2;p.push(I,C,C,N,N,I)}}const x=new(b.count>=65535?Ic:Lc)(p,1);x.version=A;const m=a.get(v);m&&e.remove(m),a.set(v,x)}function _(v){const p=a.get(v);if(p){const M=v.index;M!==null&&p.version<M.version&&h(v)}else h(v);return a.get(v)}return{get:c,update:f,getWireframeAttribute:_}}function n_(i,e,t){let n;function r(v){n=v}let a,l;function c(v){a=v.type,l=v.bytesPerElement}function f(v,p){i.drawElements(n,p,a,v*l),t.update(p,n,1)}function h(v,p,M){M!==0&&(i.drawElementsInstanced(n,p,a,v*l,M),t.update(p,n,M))}function _(v,p,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,v,0,M);let A=0;for(let x=0;x<M;x++)A+=p[x];t.update(A,n,1)}this.setMode=r,this.setIndex=c,this.render=f,this.renderInstances=h,this.renderMultiDraw=_}function i_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:vt("WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function r_(i,e,t){const n=new WeakMap,r=new Ut;function a(l,c,f){const h=l.morphTargetInfluences,_=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=_!==void 0?_.length:0;let p=n.get(c);if(p===void 0||p.count!==v){let D=function(){N.dispose(),n.delete(c),c.removeEventListener("dispose",D)};p!==void 0&&p.texture.dispose();const M=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,A=c.morphAttributes.color!==void 0,x=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],U=c.morphAttributes.color||[];let F=0;M===!0&&(F=1),b===!0&&(F=2),A===!0&&(F=3);let w=c.attributes.position.count*F,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*I*4*v),N=new Pc(C,w,I,v);N.type=Nn,N.needsUpdate=!0;const E=F*4;for(let G=0;G<v;G++){const z=x[G],ee=m[G],se=U[G],ae=w*I*4*G;for(let j=0;j<z.count;j++){const le=j*E;M===!0&&(r.fromBufferAttribute(z,j),C[ae+le+0]=r.x,C[ae+le+1]=r.y,C[ae+le+2]=r.z,C[ae+le+3]=0),b===!0&&(r.fromBufferAttribute(ee,j),C[ae+le+4]=r.x,C[ae+le+5]=r.y,C[ae+le+6]=r.z,C[ae+le+7]=0),A===!0&&(r.fromBufferAttribute(se,j),C[ae+le+8]=r.x,C[ae+le+9]=r.y,C[ae+le+10]=r.z,C[ae+le+11]=se.itemSize===4?r.w:1)}}p={count:v,texture:N,size:new nt(w,I)},n.set(c,p),c.addEventListener("dispose",D)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let M=0;for(let A=0;A<h.length;A++)M+=h[A];const b=c.morphTargetsRelative?1:1-M;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",h)}f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:a}}function s_(i,e,t,n,r){let a=new WeakMap;function l(h){const _=r.render.frame,v=h.geometry,p=e.get(h,v);if(a.get(p)!==_&&(e.update(p),a.set(p,_)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==_&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),a.set(h,_))),h.isSkinnedMesh){const M=h.skeleton;a.get(M)!==_&&(M.update(),a.set(M,_))}return p}function c(){a=new WeakMap}function f(h){const _=h.target;_.removeEventListener("dispose",f),n.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:l,dispose:c}}const a_={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[_c]:"CINEON_TONE_MAPPING",[gc]:"ACES_FILMIC_TONE_MAPPING",[xc]:"AGX_TONE_MAPPING",[Mc]:"NEUTRAL_TONE_MAPPING",[vc]:"CUSTOM_TONE_MAPPING"};function o_(i,e,t,n,r,a){const l=new Bn(e,t,{type:i,depthBuffer:r,stencilBuffer:a,samples:n?4:0,depthTexture:r?new sr(e,t):void 0}),c=new Bn(e,t,{type:jn,depthBuffer:!1,stencilBuffer:!1}),f=new on;f.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new qt([0,2,0,0,2,0],2));const h=new Kf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new Mn(f,h),v=new Io(-1,1,1,-1,0,1);let p=null,M=null,b=!1,A,x=null,m=[],U=!1;this.setSize=function(F,w){l.setSize(F,w),c.setSize(F,w);for(let I=0;I<m.length;I++){const C=m[I];C.setSize&&C.setSize(F,w)}},this.setEffects=function(F){m=F,U=m.length>0&&m[0].isRenderPass===!0;const w=l.width,I=l.height;for(let C=0;C<m.length;C++){const N=m[C];N.setSize&&N.setSize(w,I)}},this.begin=function(F,w){if(b||F.toneMapping===On&&m.length===0)return!1;if(x=w,w!==null){const I=w.width,C=w.height;(l.width!==I||l.height!==C)&&this.setSize(I,C)}return U===!1&&F.setRenderTarget(l),A=F.toneMapping,F.toneMapping=On,!0},this.hasRenderPass=function(){return U},this.end=function(F,w){F.toneMapping=A,b=!0;let I=l,C=c;for(let N=0;N<m.length;N++){const E=m[N];if(E.enabled!==!1&&(E.render(F,C,I,w),E.needsSwap!==!1)){const D=I;I=C,C=D}}if(p!==F.outputColorSpace||M!==F.toneMapping){p=F.outputColorSpace,M=F.toneMapping,h.defines={},_t.getTransfer(p)===Tt&&(h.defines.SRGB_TRANSFER="");const N=a_[M];N&&(h.defines[N]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=I.texture,F.setRenderTarget(x),F.render(_,v),x=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const Gc=new tn,mo=new sr(1,1),Wc=new Pc,Xc=new yf,qc=new Nc,ql=[],Yl=[],$l=new Float32Array(16),Kl=new Float32Array(9),Zl=new Float32Array(4);function ur(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=ql[r];if(a===void 0&&(a=new Float32Array(r),ql[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ps(i,e){let t=Yl[e];t===void 0&&(t=new Int32Array(e),Yl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function l_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function c_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function u_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function h_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function f_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Zl.set(n),i.uniformMatrix2fv(this.addr,!1,Zl),Ht(t,n)}}function d_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;Kl.set(n),i.uniformMatrix3fv(this.addr,!1,Kl),Ht(t,n)}}function p_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(Vt(t,n))return;$l.set(n),i.uniformMatrix4fv(this.addr,!1,$l),Ht(t,n)}}function m_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function __(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function g_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function v_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function x_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function M_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function S_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function E_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function y_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(mo.compareFunction=t.isReversedDepthBuffer()?wo:To,a=mo):a=Gc,t.setTexture2D(e||a,r)}function b_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Xc,r)}function T_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||qc,r)}function w_(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Wc,r)}function A_(i){switch(i){case 5126:return l_;case 35664:return c_;case 35665:return u_;case 35666:return h_;case 35674:return f_;case 35675:return d_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return __;case 35668:case 35672:return g_;case 35669:case 35673:return v_;case 5125:return x_;case 36294:return M_;case 36295:return S_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return y_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return w_}}function R_(i,e){i.uniform1fv(this.addr,e)}function C_(i,e){const t=ur(e,this.size,2);i.uniform2fv(this.addr,t)}function P_(i,e){const t=ur(e,this.size,3);i.uniform3fv(this.addr,t)}function D_(i,e){const t=ur(e,this.size,4);i.uniform4fv(this.addr,t)}function L_(i,e){const t=ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function I_(i,e){const t=ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function U_(i,e){const t=ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function N_(i,e){i.uniform1iv(this.addr,e)}function F_(i,e){i.uniform2iv(this.addr,e)}function O_(i,e){i.uniform3iv(this.addr,e)}function B_(i,e){i.uniform4iv(this.addr,e)}function k_(i,e){i.uniform1uiv(this.addr,e)}function z_(i,e){i.uniform2uiv(this.addr,e)}function V_(i,e){i.uniform3uiv(this.addr,e)}function H_(i,e){i.uniform4uiv(this.addr,e)}function G_(i,e,t){const n=this.cache,r=e.length,a=Ps(t,r);Vt(n,a)||(i.uniform1iv(this.addr,a),Ht(n,a));let l;this.type===i.SAMPLER_2D_SHADOW?l=mo:l=Gc;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||l,a[c])}function W_(i,e,t){const n=this.cache,r=e.length,a=Ps(t,r);Vt(n,a)||(i.uniform1iv(this.addr,a),Ht(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||Xc,a[l])}function X_(i,e,t){const n=this.cache,r=e.length,a=Ps(t,r);Vt(n,a)||(i.uniform1iv(this.addr,a),Ht(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||qc,a[l])}function q_(i,e,t){const n=this.cache,r=e.length,a=Ps(t,r);Vt(n,a)||(i.uniform1iv(this.addr,a),Ht(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||Wc,a[l])}function Y_(i){switch(i){case 5126:return R_;case 35664:return C_;case 35665:return P_;case 35666:return D_;case 35674:return L_;case 35675:return I_;case 35676:return U_;case 5124:case 35670:return N_;case 35667:case 35671:return F_;case 35668:case 35672:return O_;case 35669:case 35673:return B_;case 5125:return k_;case 36294:return z_;case 36295:return V_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}class $_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=A_(t.type)}}class K_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y_(t.type)}}class Z_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Jl(i,e){i.seq.push(e),i.map[e.id]=e}function J_(i,e,t){const n=i.name,r=n.length;for(Ma.lastIndex=0;;){const a=Ma.exec(n),l=Ma.lastIndex;let c=a[1];const f=a[2]==="]",h=a[3];if(f&&(c=c|0),h===void 0||h==="["&&l+2===r){Jl(t,h===void 0?new $_(c,i,e):new K_(c,i,e));break}else{let v=t.map[c];v===void 0&&(v=new Z_(c),Jl(t,v)),t=v}}}class ms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let l=0;l<n;++l){const c=e.getActiveUniform(t,l),f=e.getUniformLocation(t,c.name);J_(c,f,this)}const r=[],a=[];for(const l of this.seq)l.type===e.SAMPLER_2D_SHADOW||l.type===e.SAMPLER_CUBE_SHADOW||l.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(l):a.push(l);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const c=t[a],f=n[c.id];f.needsUpdate!==!1&&c.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function jl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const j_=37297;let Q_=0;function eg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}const Ql=new st;function tg(i){_t._getMatrix(Ql,_t.workingColorSpace,i);const e=`mat3( ${Ql.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case xs:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ec(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+eg(i.getShaderSource(e),c)}else return a}function ng(i,e){const t=tg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ig={[pc]:"Linear",[mc]:"Reinhard",[_c]:"Cineon",[gc]:"ACESFilmic",[xc]:"AgX",[Mc]:"Neutral",[vc]:"Custom"};function rg(i,e){const t=ig[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ls=new k;function sg(){_t.getLuminanceCoefficients(ls);const i=ls.x.toFixed(4),e=ls.y.toFixed(4),t=ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function og(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function Sr(i){return i!==""}function tc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(i){return i.replace(cg,hg)}const ug=new Map;function hg(i,e){let t=ot[e];if(t===void 0){const n=ug.get(e);if(n!==void 0)t=ot[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _o(t)}const fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ic(i){return i.replace(fg,dg)}function dg(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function rc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pg={[us]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function mg(i){return pg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _g={[Ai]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[Ts]:"ENVMAP_TYPE_CUBE_UV"};function gg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":_g[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const vg={[rr]:"ENVMAP_MODE_REFRACTION"};function xg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":vg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mg={[dc]:"ENVMAP_BLENDING_MULTIPLY",[zh]:"ENVMAP_BLENDING_MIX",[Vh]:"ENVMAP_BLENDING_ADD"};function Sg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Mg[i.combine]||"ENVMAP_BLENDING_NONE"}function Eg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function yg(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const f=mg(t),h=gg(t),_=xg(t),v=Sg(t),p=Eg(t),M=ag(t),b=og(a),A=r.createProgram();let x,m,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Sr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Sr).join(`
`),m.length>0&&(m+=`
`)):(x=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),m=[rc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+_:"",t.envMap?"#define "+v:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?ot.tonemapping_pars_fragment:"",t.toneMapping!==On?rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,ng("linearToOutputTexel",t.outputColorSpace),sg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),l=_o(l),l=tc(l,t),l=nc(l,t),c=_o(c),c=tc(c,t),c=nc(c,t),l=ic(l),c=ic(c),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",t.glslVersion===ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const F=U+x+l,w=U+m+c,I=jl(r,r.VERTEX_SHADER,F),C=jl(r,r.FRAGMENT_SHADER,w);r.attachShader(A,I),r.attachShader(A,C),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function N(z){if(i.debug.checkShaderErrors){const ee=r.getProgramInfoLog(A)||"",se=r.getShaderInfoLog(I)||"",ae=r.getShaderInfoLog(C)||"",j=ee.trim(),le=se.trim(),X=ae.trim();let re=!0,ve=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,I,C);else{const we=ec(r,I,"vertex"),fe=ec(r,C,"fragment");vt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+j+`
`+we+`
`+fe)}else j!==""?Je("WebGLProgram: Program Info Log:",j):(le===""||X==="")&&(ve=!1);ve&&(z.diagnostics={runnable:re,programLog:j,vertexShader:{log:le,prefix:x},fragmentShader:{log:X,prefix:m}})}r.deleteShader(I),r.deleteShader(C),E=new ms(r,A),D=lg(r,A)}let E;this.getUniforms=function(){return E===void 0&&N(this),E};let D;this.getAttributes=function(){return D===void 0&&N(this),D};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=r.getProgramParameter(A,j_)),G},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q_++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=C,this}let bg=0;class Tg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wg(e),t.set(e,n)),n}}class wg{constructor(e){this.id=bg++,this.code=e,this.usedTimes=0}}function Ag(i){return i===Ri||i===_s||i===gs}function Rg(i,e,t,n,r,a){const l=new Po,c=new Tg,f=new Set,h=[],_=new Map,v=n.logarithmicDepthBuffer;let p=n.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return f.add(E),E===0?"uv":`uv${E}`}function A(E,D,G,z,ee,se){const ae=z.fog,j=ee.geometry,le=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,re=e.get(E.envMap||le,X),ve=re&&re.mapping===Ts?re.image.height:null,we=M[E.type];E.precision!==null&&(p=n.getMaxPrecision(E.precision),p!==E.precision&&Je("WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const fe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ge=fe!==void 0?fe.length:0;let Ne=0;j.morphAttributes.position!==void 0&&(Ne=1),j.morphAttributes.normal!==void 0&&(Ne=2),j.morphAttributes.color!==void 0&&(Ne=3);let Me,He,K,me;if(we){const Re=Un[we];Me=Re.vertexShader,He=Re.fragmentShader}else{Me=E.vertexShader,He=E.fragmentShader;const Re=c.getVertexShaderStage(E),je=c.getFragmentShaderStage(E);c.update(E,Re,je),K=Re.id,me=je.id}const ue=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),ke=ee.isInstancedMesh===!0,Ge=ee.isBatchedMesh===!0,ct=!!E.map,We=!!E.matcap,$e=!!re,Ze=!!E.aoMap,Ye=!!E.lightMap,dt=!!E.bumpMap&&E.wireframe===!1,xt=!!E.normalMap,Et=!!E.displacementMap,St=!!E.emissiveMap,Mt=!!E.metalnessMap,At=!!E.roughnessMap,V=E.anisotropy>0,Pt=E.clearcoat>0,mt=E.dispersion>0,P=E.iridescence>0,g=E.sheen>0,q=E.transmission>0,H=V&&!!E.anisotropyMap,te=Pt&&!!E.clearcoatMap,xe=Pt&&!!E.clearcoatNormalMap,ye=Pt&&!!E.clearcoatRoughnessMap,Z=P&&!!E.iridescenceMap,ce=P&&!!E.iridescenceThicknessMap,Te=g&&!!E.sheenColorMap,Le=g&&!!E.sheenRoughnessMap,be=!!E.specularMap,Se=!!E.specularColorMap,ze=!!E.specularIntensityMap,qe=q&&!!E.transmissionMap,Qe=q&&!!E.thicknessMap,B=!!E.gradientMap,ne=!!E.alphaMap,J=E.alphaTest>0,he=!!E.alphaHash,pe=!!E.extensions;let oe=On;E.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(oe=i.toneMapping);const de={shaderID:we,shaderType:E.type,shaderName:E.name,vertexShader:Me,fragmentShader:He,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&ee._colorsTexture!==null,instancing:ke,instancingColor:ke&&ee.instanceColor!==null,instancingMorph:ke&&ee.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:ct,matcap:We,envMap:$e,envMapMode:$e&&re.mapping,envMapCubeUVHeight:ve,aoMap:Ze,lightMap:Ye,bumpMap:dt,normalMap:xt,displacementMap:Et,emissiveMap:St,normalMapObjectSpace:xt&&E.normalMapType===Wh,normalMapTangentSpace:xt&&E.normalMapType===ho,packedNormalMap:xt&&E.normalMapType===ho&&Ag(E.normalMap.format),metalnessMap:Mt,roughnessMap:At,anisotropy:V,anisotropyMap:H,clearcoat:Pt,clearcoatMap:te,clearcoatNormalMap:xe,clearcoatRoughnessMap:ye,dispersion:mt,iridescence:P,iridescenceMap:Z,iridescenceThicknessMap:ce,sheen:g,sheenColorMap:Te,sheenRoughnessMap:Le,specularMap:be,specularColorMap:Se,specularIntensityMap:ze,transmission:q,transmissionMap:qe,thicknessMap:Qe,gradientMap:B,opaque:E.transparent===!1&&E.blending===Qi&&E.alphaToCoverage===!1,alphaMap:ne,alphaTest:J,alphaHash:he,combine:E.combine,mapUv:ct&&b(E.map.channel),aoMapUv:Ze&&b(E.aoMap.channel),lightMapUv:Ye&&b(E.lightMap.channel),bumpMapUv:dt&&b(E.bumpMap.channel),normalMapUv:xt&&b(E.normalMap.channel),displacementMapUv:Et&&b(E.displacementMap.channel),emissiveMapUv:St&&b(E.emissiveMap.channel),metalnessMapUv:Mt&&b(E.metalnessMap.channel),roughnessMapUv:At&&b(E.roughnessMap.channel),anisotropyMapUv:H&&b(E.anisotropyMap.channel),clearcoatMapUv:te&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:xe&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&b(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:Le&&b(E.sheenRoughnessMap.channel),specularMapUv:be&&b(E.specularMap.channel),specularColorMapUv:Se&&b(E.specularColorMap.channel),specularIntensityMapUv:ze&&b(E.specularIntensityMap.channel),transmissionMapUv:qe&&b(E.transmissionMap.channel),thicknessMapUv:Qe&&b(E.thicknessMap.channel),alphaMapUv:ne&&b(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(xt||V),vertexNormals:!!j.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!j.attributes.uv&&(ct||ne),fog:!!ae,useFog:E.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||j.attributes.normal===void 0&&xt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Pe,skinning:ee.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ne,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:se.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:ct&&E.map.isVideoTexture===!0&&_t.getTransfer(E.map.colorSpace)===Tt,decodeVideoTextureEmissive:St&&E.emissiveMap.isVideoTexture===!0&&_t.getTransfer(E.emissiveMap.colorSpace)===Tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Rn,flipSided:E.side===cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:pe&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&E.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return de.vertexUv1s=f.has(1),de.vertexUv2s=f.has(2),de.vertexUv3s=f.has(3),f.clear(),de}function x(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)D.push(G),D.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(m(D,E),U(D,E),D.push(i.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function m(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function U(E,D){l.disableAll(),D.instancing&&l.enable(0),D.instancingColor&&l.enable(1),D.instancingMorph&&l.enable(2),D.matcap&&l.enable(3),D.envMap&&l.enable(4),D.normalMapObjectSpace&&l.enable(5),D.normalMapTangentSpace&&l.enable(6),D.clearcoat&&l.enable(7),D.iridescence&&l.enable(8),D.alphaTest&&l.enable(9),D.vertexColors&&l.enable(10),D.vertexAlphas&&l.enable(11),D.vertexUv1s&&l.enable(12),D.vertexUv2s&&l.enable(13),D.vertexUv3s&&l.enable(14),D.vertexTangents&&l.enable(15),D.anisotropy&&l.enable(16),D.alphaHash&&l.enable(17),D.batching&&l.enable(18),D.dispersion&&l.enable(19),D.batchingColor&&l.enable(20),D.gradientMap&&l.enable(21),D.packedNormalMap&&l.enable(22),D.vertexNormals&&l.enable(23),E.push(l.mask),l.disableAll(),D.fog&&l.enable(0),D.useFog&&l.enable(1),D.flatShading&&l.enable(2),D.logarithmicDepthBuffer&&l.enable(3),D.reversedDepthBuffer&&l.enable(4),D.skinning&&l.enable(5),D.morphTargets&&l.enable(6),D.morphNormals&&l.enable(7),D.morphColors&&l.enable(8),D.premultipliedAlpha&&l.enable(9),D.shadowMapEnabled&&l.enable(10),D.doubleSided&&l.enable(11),D.flipSided&&l.enable(12),D.useDepthPacking&&l.enable(13),D.dithering&&l.enable(14),D.transmission&&l.enable(15),D.sheen&&l.enable(16),D.opaque&&l.enable(17),D.pointsUvs&&l.enable(18),D.decodeVideoTexture&&l.enable(19),D.decodeVideoTextureEmissive&&l.enable(20),D.alphaToCoverage&&l.enable(21),D.numLightProbeGrids>0&&l.enable(22),D.hasPositionAttribute&&l.enable(23),E.push(l.mask)}function F(E){const D=M[E.type];let G;if(D){const z=Un[D];G=qf.clone(z.uniforms)}else G=E.uniforms;return G}function w(E,D){let G=_.get(D);return G!==void 0?++G.usedTimes:(G=new yg(i,D,E,r),h.push(G),_.set(D,G)),G}function I(E){if(--E.usedTimes===0){const D=h.indexOf(E);h[D]=h[h.length-1],h.pop(),_.delete(E.cacheKey),E.destroy()}}function C(E){c.remove(E)}function N(){c.dispose()}return{getParameters:A,getProgramCacheKey:x,getUniforms:F,acquireProgram:w,releaseProgram:I,releaseShaderCache:C,programs:h,dispose:N}}function Cg(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let c=i.get(l);return c===void 0&&(c={},i.set(l,c)),c}function n(l){i.delete(l)}function r(l,c,f){i.get(l)[c]=f}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Pg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function sc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ac(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(p){let M=0;return p.isInstancedMesh&&(M+=2),p.isSkinnedMesh&&(M+=1),M}function c(p,M,b,A,x,m){let U=i[e];return U===void 0?(U={id:p.id,object:p,geometry:M,material:b,materialVariant:l(p),groupOrder:A,renderOrder:p.renderOrder,z:x,group:m},i[e]=U):(U.id=p.id,U.object=p,U.geometry=M,U.material=b,U.materialVariant=l(p),U.groupOrder=A,U.renderOrder=p.renderOrder,U.z=x,U.group=m),e++,U}function f(p,M,b,A,x,m){const U=c(p,M,b,A,x,m);b.transmission>0?n.push(U):b.transparent===!0?r.push(U):t.push(U)}function h(p,M,b,A,x,m){const U=c(p,M,b,A,x,m);b.transmission>0?n.unshift(U):b.transparent===!0?r.unshift(U):t.unshift(U)}function _(p,M,b){t.length>1&&t.sort(p||Pg),n.length>1&&n.sort(M||sc),r.length>1&&r.sort(M||sc),b&&(t.reverse(),n.reverse(),r.reverse())}function v(){for(let p=e,M=i.length;p<M;p++){const b=i[p];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:f,unshift:h,finish:v,sort:_}}function Dg(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new ac,i.set(n,[l])):r>=a.length?(l=new ac,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function Lg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new ft};break;case"SpotLight":t={position:new k,direction:new k,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Ig(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ug=0;function Ng(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fg(i){const e=new Lg,t=Ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new k);const r=new k,a=new Dt,l=new Dt;function c(h){let _=0,v=0,p=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let M=0,b=0,A=0,x=0,m=0,U=0,F=0,w=0,I=0,C=0,N=0;h.sort(Ng);for(let D=0,G=h.length;D<G;D++){const z=h[D],ee=z.color,se=z.intensity,ae=z.distance;let j=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ri?j=z.shadow.map.texture:j=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)_+=ee.r*se,v+=ee.g*se,p+=ee.b*se;else if(z.isLightProbe){for(let le=0;le<9;le++)n.probe[le].addScaledVector(z.sh.coefficients[le],se);N++}else if(z.isDirectionalLight){const le=e.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const X=z.shadow,re=t.get(z);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize=X.mapSize,n.directionalShadow[M]=re,n.directionalShadowMap[M]=j,n.directionalShadowMatrix[M]=z.shadow.matrix,U++}n.directional[M]=le,M++}else if(z.isSpotLight){const le=e.get(z);le.position.setFromMatrixPosition(z.matrixWorld),le.color.copy(ee).multiplyScalar(se),le.distance=ae,le.coneCos=Math.cos(z.angle),le.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),le.decay=z.decay,n.spot[A]=le;const X=z.shadow;if(z.map&&(n.spotLightMap[I]=z.map,I++,X.updateMatrices(z),z.castShadow&&C++),n.spotLightMatrix[A]=X.matrix,z.castShadow){const re=t.get(z);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize=X.mapSize,n.spotShadow[A]=re,n.spotShadowMap[A]=j,w++}A++}else if(z.isRectAreaLight){const le=e.get(z);le.color.copy(ee).multiplyScalar(se),le.halfWidth.set(z.width*.5,0,0),le.halfHeight.set(0,z.height*.5,0),n.rectArea[x]=le,x++}else if(z.isPointLight){const le=e.get(z);if(le.color.copy(z.color).multiplyScalar(z.intensity),le.distance=z.distance,le.decay=z.decay,z.castShadow){const X=z.shadow,re=t.get(z);re.shadowIntensity=X.intensity,re.shadowBias=X.bias,re.shadowNormalBias=X.normalBias,re.shadowRadius=X.radius,re.shadowMapSize=X.mapSize,re.shadowCameraNear=X.camera.near,re.shadowCameraFar=X.camera.far,n.pointShadow[b]=re,n.pointShadowMap[b]=j,n.pointShadowMatrix[b]=z.shadow.matrix,F++}n.point[b]=le,b++}else if(z.isHemisphereLight){const le=e.get(z);le.skyColor.copy(z.color).multiplyScalar(se),le.groundColor.copy(z.groundColor).multiplyScalar(se),n.hemi[m]=le,m++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=_,n.ambient[1]=v,n.ambient[2]=p;const E=n.hash;(E.directionalLength!==M||E.pointLength!==b||E.spotLength!==A||E.rectAreaLength!==x||E.hemiLength!==m||E.numDirectionalShadows!==U||E.numPointShadows!==F||E.numSpotShadows!==w||E.numSpotMaps!==I||E.numLightProbes!==N)&&(n.directional.length=M,n.spot.length=A,n.rectArea.length=x,n.point.length=b,n.hemi.length=m,n.directionalShadow.length=U,n.directionalShadowMap.length=U,n.pointShadow.length=F,n.pointShadowMap.length=F,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=U,n.pointShadowMatrix.length=F,n.spotLightMatrix.length=w+I-C,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=N,E.directionalLength=M,E.pointLength=b,E.spotLength=A,E.rectAreaLength=x,E.hemiLength=m,E.numDirectionalShadows=U,E.numPointShadows=F,E.numSpotShadows=w,E.numSpotMaps=I,E.numLightProbes=N,n.version=Ug++)}function f(h,_){let v=0,p=0,M=0,b=0,A=0;const x=_.matrixWorldInverse;for(let m=0,U=h.length;m<U;m++){const F=h[m];if(F.isDirectionalLight){const w=n.directional[v];w.direction.setFromMatrixPosition(F.matrixWorld),r.setFromMatrixPosition(F.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),v++}else if(F.isSpotLight){const w=n.spot[M];w.position.setFromMatrixPosition(F.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(F.matrixWorld),r.setFromMatrixPosition(F.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(x),M++}else if(F.isRectAreaLight){const w=n.rectArea[b];w.position.setFromMatrixPosition(F.matrixWorld),w.position.applyMatrix4(x),l.identity(),a.copy(F.matrixWorld),a.premultiply(x),l.extractRotation(a),w.halfWidth.set(F.width*.5,0,0),w.halfHeight.set(0,F.height*.5,0),w.halfWidth.applyMatrix4(l),w.halfHeight.applyMatrix4(l),b++}else if(F.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(F.matrixWorld),w.position.applyMatrix4(x),p++}else if(F.isHemisphereLight){const w=n.hemi[A];w.direction.setFromMatrixPosition(F.matrixWorld),w.direction.transformDirection(x),A++}}}return{setup:c,setupView:f,state:n}}function oc(i){const e=new Fg(i),t=[],n=[],r=[];function a(p){v.camera=p,t.length=0,n.length=0,r.length=0}function l(p){t.push(p)}function c(p){n.push(p)}function f(p){r.push(p)}function h(){e.setup(t)}function _(p){e.setupView(t,p)}const v={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:v,setupLights:h,setupLightsView:_,pushLight:l,pushShadow:c,pushLightProbeGrid:f}}function Og(i){let e=new WeakMap;function t(r,a=0){const l=e.get(r);let c;return l===void 0?(c=new oc(i),e.set(r,[c])):a>=l.length?(c=new oc(i),l.push(c)):c=l[a],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const Bg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zg=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],Vg=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],lc=new Dt,xr=new k,Sa=new k;function Hg(i,e,t){let n=new Do;const r=new nt,a=new nt,l=new Ut,c=new Jf,f=new jf,h={},_=t.maxTextureSize,v={[pi]:cn,[cn]:pi,[Rn]:Rn},p=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:Bg,fragmentShader:kg}),M=p.clone();M.defines.HORIZONTAL_PASS=1;const b=new on;b.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Mn(b,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=us;let m=this.type;this.render=function(C,N,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===Sh&&(Je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=us);const D=i.getRenderTarget(),G=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),ee=i.state;ee.setBlending(Zn),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const se=m!==this.type;se&&N.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(j=>j.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,j=C.length;ae<j;ae++){const le=C[ae],X=le.shadow;if(X===void 0){Je("WebGLShadowMap:",le,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const re=X.getFrameExtents();r.multiply(re),a.copy(X.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(a.x=Math.floor(_/re.x),r.x=a.x*re.x,X.mapSize.x=a.x),r.y>_&&(a.y=Math.floor(_/re.y),r.y=a.y*re.y,X.mapSize.y=a.y));const ve=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ve,X.map===null||se===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Mr){if(le.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Bn(r.x,r.y,{format:Ri,type:jn,minFilter:en,magFilter:en,generateMipmaps:!1}),X.map.texture.name=le.name+".shadowMap",X.map.depthTexture=new sr(r.x,r.y,Nn),X.map.depthTexture.name=le.name+".shadowMapDepth",X.map.depthTexture.format=Qn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Zt,X.map.depthTexture.magFilter=Zt}else le.isPointLight?(X.map=new Hc(r.x),X.map.depthTexture=new Gf(r.x,zn)):(X.map=new Bn(r.x,r.y),X.map.depthTexture=new sr(r.x,r.y,zn)),X.map.depthTexture.name=le.name+".shadowMap",X.map.depthTexture.format=Qn,this.type===us?(X.map.depthTexture.compareFunction=ve?wo:To,X.map.depthTexture.minFilter=en,X.map.depthTexture.magFilter=en):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Zt,X.map.depthTexture.magFilter=Zt);X.camera.updateProjectionMatrix()}const we=X.map.isWebGLCubeRenderTarget?6:1;for(let fe=0;fe<we;fe++){if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,fe),i.clear();else{fe===0&&(i.setRenderTarget(X.map),i.clear());const ge=X.getViewport(fe);l.set(a.x*ge.x,a.y*ge.y,a.x*ge.z,a.y*ge.w),ee.viewport(l)}if(le.isPointLight){const ge=X.camera,Ne=X.matrix,Me=le.distance||ge.far;Me!==ge.far&&(ge.far=Me,ge.updateProjectionMatrix()),xr.setFromMatrixPosition(le.matrixWorld),ge.position.copy(xr),Sa.copy(ge.position),Sa.add(zg[fe]),ge.up.copy(Vg[fe]),ge.lookAt(Sa),ge.updateMatrixWorld(),Ne.makeTranslation(-xr.x,-xr.y,-xr.z),lc.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),X._frustum.setFromProjectionMatrix(lc,ge.coordinateSystem,ge.reversedDepth)}else X.updateMatrices(le);n=X.getFrustum(),w(N,E,X.camera,le,this.type)}X.isPointLightShadow!==!0&&this.type===Mr&&U(X,E),X.needsUpdate=!1}m=this.type,x.needsUpdate=!1,i.setRenderTarget(D,G,z)};function U(C,N){const E=e.update(A);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,M.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,M.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Bn(r.x,r.y,{format:Ri,type:jn})),p.uniforms.shadow_pass.value=C.map.depthTexture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(N,null,E,p,A,null),M.uniforms.shadow_pass.value=C.mapPass.texture,M.uniforms.resolution.value=C.mapSize,M.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(N,null,E,M,A,null)}function F(C,N,E,D){let G=null;const z=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(z!==void 0)G=z;else if(G=E.isPointLight===!0?f:c,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const ee=G.uuid,se=N.uuid;let ae=h[ee];ae===void 0&&(ae={},h[ee]=ae);let j=ae[se];j===void 0&&(j=G.clone(),ae[se]=j,N.addEventListener("dispose",I)),G=j}if(G.visible=N.visible,G.wireframe=N.wireframe,D===Mr?G.side=N.shadowSide!==null?N.shadowSide:N.side:G.side=N.shadowSide!==null?N.shadowSide:v[N.side],G.alphaMap=N.alphaMap,G.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,G.map=N.map,G.clipShadows=N.clipShadows,G.clippingPlanes=N.clippingPlanes,G.clipIntersection=N.clipIntersection,G.displacementMap=N.displacementMap,G.displacementScale=N.displacementScale,G.displacementBias=N.displacementBias,G.wireframeLinewidth=N.wireframeLinewidth,G.linewidth=N.linewidth,E.isPointLight===!0&&G.isMeshDistanceMaterial===!0){const ee=i.properties.get(G);ee.light=E}return G}function w(C,N,E,D,G){if(C.visible===!1)return;if(C.layers.test(N.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&G===Mr)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const se=e.update(C),ae=C.material;if(Array.isArray(ae)){const j=se.groups;for(let le=0,X=j.length;le<X;le++){const re=j[le],ve=ae[re.materialIndex];if(ve&&ve.visible){const we=F(C,ve,D,G);C.onBeforeShadow(i,C,N,E,se,we,re),i.renderBufferDirect(E,null,se,we,C,re),C.onAfterShadow(i,C,N,E,se,we,re)}}}else if(ae.visible){const j=F(C,ae,D,G);C.onBeforeShadow(i,C,N,E,se,j,null),i.renderBufferDirect(E,null,se,j,C,null),C.onAfterShadow(i,C,N,E,se,j,null)}}const ee=C.children;for(let se=0,ae=ee.length;se<ae;se++)w(ee[se],N,E,D,G)}function I(C){C.target.removeEventListener("dispose",I);for(const E in h){const D=h[E],G=C.target.uuid;G in D&&(D[G].dispose(),delete D[G])}}}function Gg(i,e){function t(){let B=!1;const ne=new Ut;let J=null;const he=new Ut(0,0,0,0);return{setMask:function(pe){J!==pe&&!B&&(i.colorMask(pe,pe,pe,pe),J=pe)},setLocked:function(pe){B=pe},setClear:function(pe,oe,de,Re,je){je===!0&&(pe*=Re,oe*=Re,de*=Re),ne.set(pe,oe,de,Re),he.equals(ne)===!1&&(i.clearColor(pe,oe,de,Re),he.copy(ne))},reset:function(){B=!1,J=null,he.set(-1,0,0,0)}}}function n(){let B=!1,ne=!1,J=null,he=null,pe=null;return{setReversed:function(oe){if(ne!==oe){const de=e.get("EXT_clip_control");oe?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),ne=oe;const Re=pe;pe=null,this.setClear(Re)}},getReversed:function(){return ne},setTest:function(oe){oe?ue(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(oe){J!==oe&&!B&&(i.depthMask(oe),J=oe)},setFunc:function(oe){if(ne&&(oe=ef[oe]),he!==oe){switch(oe){case wa:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ra:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case Ca:i.depthFunc(i.EQUAL);break;case Pa:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case La:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=oe}},setLocked:function(oe){B=oe},setClear:function(oe){pe!==oe&&(pe=oe,ne&&(oe=1-oe),i.clearDepth(oe))},reset:function(){B=!1,J=null,he=null,pe=null,ne=!1}}}function r(){let B=!1,ne=null,J=null,he=null,pe=null,oe=null,de=null,Re=null,je=null;return{setTest:function(et){B||(et?ue(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(et){ne!==et&&!B&&(i.stencilMask(et),ne=et)},setFunc:function(et,Nt,kt){(J!==et||he!==Nt||pe!==kt)&&(i.stencilFunc(et,Nt,kt),J=et,he=Nt,pe=kt)},setOp:function(et,Nt,kt){(oe!==et||de!==Nt||Re!==kt)&&(i.stencilOp(et,Nt,kt),oe=et,de=Nt,Re=kt)},setLocked:function(et){B=et},setClear:function(et){je!==et&&(i.clearStencil(et),je=et)},reset:function(){B=!1,ne=null,J=null,he=null,pe=null,oe=null,de=null,Re=null,je=null}}}const a=new t,l=new n,c=new r,f=new WeakMap,h=new WeakMap;let _={},v={},p={},M=new WeakMap,b=[],A=null,x=!1,m=null,U=null,F=null,w=null,I=null,C=null,N=null,E=new ft(0,0,0),D=0,G=!1,z=null,ee=null,se=null,ae=null,j=null;const le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,re=0;const ve=i.getParameter(i.VERSION);ve.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ve)[1]),X=re>=1):ve.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ve)[1]),X=re>=2);let we=null,fe={};const ge=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Me=new Ut().fromArray(ge),He=new Ut().fromArray(Ne);function K(B,ne,J,he){const pe=new Uint8Array(4),oe=i.createTexture();i.bindTexture(B,oe),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<J;de++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ne+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return oe}const me={};me[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ue(i.DEPTH_TEST),l.setFunc(ir),dt(!1),xt(tl),ue(i.CULL_FACE),Ze(Zn);function ue(B){_[B]!==!0&&(i.enable(B),_[B]=!0)}function Pe(B){_[B]!==!1&&(i.disable(B),_[B]=!1)}function ke(B,ne){return p[B]!==ne?(i.bindFramebuffer(B,ne),p[B]=ne,B===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ne),B===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ge(B,ne){let J=b,he=!1;if(B){J=M.get(ne),J===void 0&&(J=[],M.set(ne,J));const pe=B.textures;if(J.length!==pe.length||J[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,de=pe.length;oe<de;oe++)J[oe]=i.COLOR_ATTACHMENT0+oe;J.length=pe.length,he=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,he=!0);he&&i.drawBuffers(J)}function ct(B){return A!==B?(i.useProgram(B),A=B,!0):!1}const We={[yi]:i.FUNC_ADD,[yh]:i.FUNC_SUBTRACT,[bh]:i.FUNC_REVERSE_SUBTRACT};We[Th]=i.MIN,We[wh]=i.MAX;const $e={[Ah]:i.ZERO,[Rh]:i.ONE,[Ch]:i.SRC_COLOR,[ba]:i.SRC_ALPHA,[Nh]:i.SRC_ALPHA_SATURATE,[Ih]:i.DST_COLOR,[Dh]:i.DST_ALPHA,[Ph]:i.ONE_MINUS_SRC_COLOR,[Ta]:i.ONE_MINUS_SRC_ALPHA,[Uh]:i.ONE_MINUS_DST_COLOR,[Lh]:i.ONE_MINUS_DST_ALPHA,[Fh]:i.CONSTANT_COLOR,[Oh]:i.ONE_MINUS_CONSTANT_COLOR,[Bh]:i.CONSTANT_ALPHA,[kh]:i.ONE_MINUS_CONSTANT_ALPHA};function Ze(B,ne,J,he,pe,oe,de,Re,je,et){if(B===Zn){x===!0&&(Pe(i.BLEND),x=!1);return}if(x===!1&&(ue(i.BLEND),x=!0),B!==Eh){if(B!==m||et!==G){if((U!==yi||I!==yi)&&(i.blendEquation(i.FUNC_ADD),U=yi,I=yi),et)switch(B){case Qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFunc(i.ONE,i.ONE);break;case il:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:vt("WebGLState: Invalid blending: ",B);break}else switch(B){case Qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case il:vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rl:vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:vt("WebGLState: Invalid blending: ",B);break}F=null,w=null,C=null,N=null,E.set(0,0,0),D=0,m=B,G=et}return}pe=pe||ne,oe=oe||J,de=de||he,(ne!==U||pe!==I)&&(i.blendEquationSeparate(We[ne],We[pe]),U=ne,I=pe),(J!==F||he!==w||oe!==C||de!==N)&&(i.blendFuncSeparate($e[J],$e[he],$e[oe],$e[de]),F=J,w=he,C=oe,N=de),(Re.equals(E)===!1||je!==D)&&(i.blendColor(Re.r,Re.g,Re.b,je),E.copy(Re),D=je),m=B,G=!1}function Ye(B,ne){B.side===Rn?Pe(i.CULL_FACE):ue(i.CULL_FACE);let J=B.side===cn;ne&&(J=!J),dt(J),B.blending===Qi&&B.transparent===!1?Ze(Zn):Ze(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),a.setMask(B.colorWrite);const he=B.stencilWrite;c.setTest(he),he&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),St(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function dt(B){z!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),z=B)}function xt(B){B!==xh?(ue(i.CULL_FACE),B!==ee&&(B===tl?i.cullFace(i.BACK):B===Mh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),ee=B}function Et(B){B!==se&&(X&&i.lineWidth(B),se=B)}function St(B,ne,J){B?(ue(i.POLYGON_OFFSET_FILL),(ae!==ne||j!==J)&&(ae=ne,j=J,l.getReversed()&&(ne=-ne),i.polygonOffset(ne,J))):Pe(i.POLYGON_OFFSET_FILL)}function Mt(B){B?ue(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function At(B){B===void 0&&(B=i.TEXTURE0+le-1),we!==B&&(i.activeTexture(B),we=B)}function V(B,ne,J){J===void 0&&(we===null?J=i.TEXTURE0+le-1:J=we);let he=fe[J];he===void 0&&(he={type:void 0,texture:void 0},fe[J]=he),(he.type!==B||he.texture!==ne)&&(we!==J&&(i.activeTexture(J),we=J),i.bindTexture(B,ne||me[B]),he.type=B,he.texture=ne)}function Pt(){const B=fe[we];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function mt(){try{i.compressedTexImage2D(...arguments)}catch(B){vt("WebGLState:",B)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(B){vt("WebGLState:",B)}}function g(){try{i.texSubImage2D(...arguments)}catch(B){vt("WebGLState:",B)}}function q(){try{i.texSubImage3D(...arguments)}catch(B){vt("WebGLState:",B)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(B){vt("WebGLState:",B)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(B){vt("WebGLState:",B)}}function xe(){try{i.texStorage2D(...arguments)}catch(B){vt("WebGLState:",B)}}function ye(){try{i.texStorage3D(...arguments)}catch(B){vt("WebGLState:",B)}}function Z(){try{i.texImage2D(...arguments)}catch(B){vt("WebGLState:",B)}}function ce(){try{i.texImage3D(...arguments)}catch(B){vt("WebGLState:",B)}}function Te(B){return v[B]!==void 0?v[B]:i.getParameter(B)}function Le(B,ne){v[B]!==ne&&(i.pixelStorei(B,ne),v[B]=ne)}function be(B){Me.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Me.copy(B))}function Se(B){He.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),He.copy(B))}function ze(B,ne){let J=h.get(ne);J===void 0&&(J=new WeakMap,h.set(ne,J));let he=J.get(B);he===void 0&&(he=i.getUniformBlockIndex(ne,B.name),J.set(B,he))}function qe(B,ne){const he=h.get(ne).get(B);f.get(ne)!==he&&(i.uniformBlockBinding(ne,he,B.__bindingPointIndex),f.set(ne,he))}function Qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),_={},v={},we=null,fe={},p={},M=new WeakMap,b=[],A=null,x=!1,m=null,U=null,F=null,w=null,I=null,C=null,N=null,E=new ft(0,0,0),D=0,G=!1,z=null,ee=null,se=null,ae=null,j=null,Me.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:ue,disable:Pe,bindFramebuffer:ke,drawBuffers:Ge,useProgram:ct,setBlending:Ze,setMaterial:Ye,setFlipSided:dt,setCullFace:xt,setLineWidth:Et,setPolygonOffset:St,setScissorTest:Mt,activeTexture:At,bindTexture:V,unbindTexture:Pt,compressedTexImage2D:mt,compressedTexImage3D:P,texImage2D:Z,texImage3D:ce,pixelStorei:Le,getParameter:Te,updateUBOMapping:ze,uniformBlockBinding:qe,texStorage2D:xe,texStorage3D:ye,texSubImage2D:g,texSubImage3D:q,compressedTexSubImage2D:H,compressedTexSubImage3D:te,scissor:be,viewport:Se,reset:Qe}}function Wg(i,e,t,n,r,a,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new nt,_=new WeakMap,v=new Set;let p;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,g){return b?new OffscreenCanvas(P,g):Ms("canvas")}function x(P,g,q){let H=1;const te=mt(P);if((te.width>q||te.height>q)&&(H=q/Math.max(te.width,te.height)),H<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const xe=Math.floor(H*te.width),ye=Math.floor(H*te.height);p===void 0&&(p=A(xe,ye));const Z=g?A(xe,ye):p;return Z.width=xe,Z.height=ye,Z.getContext("2d").drawImage(P,0,0,xe,ye),Je("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+xe+"x"+ye+")."),Z}else return"data"in P&&Je("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function m(P){return P.generateMipmaps}function U(P){i.generateMipmap(P)}function F(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(P,g,q,H,te,xe=!1){if(P!==null){if(i[P]!==void 0)return i[P];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ye;H&&(ye=e.get("EXT_texture_norm16"),ye||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=g;if(g===i.RED&&(q===i.FLOAT&&(Z=i.R32F),q===i.HALF_FLOAT&&(Z=i.R16F),q===i.UNSIGNED_BYTE&&(Z=i.R8),q===i.UNSIGNED_SHORT&&ye&&(Z=ye.R16_EXT),q===i.SHORT&&ye&&(Z=ye.R16_SNORM_EXT)),g===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(Z=i.R8UI),q===i.UNSIGNED_SHORT&&(Z=i.R16UI),q===i.UNSIGNED_INT&&(Z=i.R32UI),q===i.BYTE&&(Z=i.R8I),q===i.SHORT&&(Z=i.R16I),q===i.INT&&(Z=i.R32I)),g===i.RG&&(q===i.FLOAT&&(Z=i.RG32F),q===i.HALF_FLOAT&&(Z=i.RG16F),q===i.UNSIGNED_BYTE&&(Z=i.RG8),q===i.UNSIGNED_SHORT&&ye&&(Z=ye.RG16_EXT),q===i.SHORT&&ye&&(Z=ye.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(Z=i.RG8UI),q===i.UNSIGNED_SHORT&&(Z=i.RG16UI),q===i.UNSIGNED_INT&&(Z=i.RG32UI),q===i.BYTE&&(Z=i.RG8I),q===i.SHORT&&(Z=i.RG16I),q===i.INT&&(Z=i.RG32I)),g===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),q===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),q===i.UNSIGNED_INT&&(Z=i.RGB32UI),q===i.BYTE&&(Z=i.RGB8I),q===i.SHORT&&(Z=i.RGB16I),q===i.INT&&(Z=i.RGB32I)),g===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),q===i.UNSIGNED_INT&&(Z=i.RGBA32UI),q===i.BYTE&&(Z=i.RGBA8I),q===i.SHORT&&(Z=i.RGBA16I),q===i.INT&&(Z=i.RGBA32I)),g===i.RGB&&(q===i.UNSIGNED_SHORT&&ye&&(Z=ye.RGB16_EXT),q===i.SHORT&&ye&&(Z=ye.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),g===i.RGBA){const ce=xe?xs:_t.getTransfer(te);q===i.FLOAT&&(Z=i.RGBA32F),q===i.HALF_FLOAT&&(Z=i.RGBA16F),q===i.UNSIGNED_BYTE&&(Z=ce===Tt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&ye&&(Z=ye.RGBA16_EXT),q===i.SHORT&&ye&&(Z=ye.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function I(P,g){let q;return P?g===null||g===zn||g===br?q=i.DEPTH24_STENCIL8:g===Nn?q=i.DEPTH32F_STENCIL8:g===yr&&(q=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===zn||g===br?q=i.DEPTH_COMPONENT24:g===Nn?q=i.DEPTH_COMPONENT32F:g===yr&&(q=i.DEPTH_COMPONENT16),q}function C(P,g){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Zt&&P.minFilter!==en?Math.log2(Math.max(g.width,g.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?g.mipmaps.length:1}function N(P){const g=P.target;g.removeEventListener("dispose",N),D(g),g.isVideoTexture&&_.delete(g),g.isHTMLTexture&&v.delete(g)}function E(P){const g=P.target;g.removeEventListener("dispose",E),z(g)}function D(P){const g=n.get(P);if(g.__webglInit===void 0)return;const q=P.source,H=M.get(q);if(H){const te=H[g.__cacheKey];te.usedTimes--,te.usedTimes===0&&G(P),Object.keys(H).length===0&&M.delete(q)}n.remove(P)}function G(P){const g=n.get(P);i.deleteTexture(g.__webglTexture);const q=P.source,H=M.get(q);delete H[g.__cacheKey],l.memory.textures--}function z(P){const g=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let te=0;te<g.__webglFramebuffer[H].length;te++)i.deleteFramebuffer(g.__webglFramebuffer[H][te]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const q=P.textures;for(let H=0,te=q.length;H<te;H++){const xe=n.get(q[H]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),l.memory.textures--),n.remove(q[H])}n.remove(P)}let ee=0;function se(){ee=0}function ae(){return ee}function j(P){ee=P}function le(){const P=ee;return P>=r.maxTextures&&Je("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),ee+=1,P}function X(P){const g=[];return g.push(P.wrapS),g.push(P.wrapT),g.push(P.wrapR||0),g.push(P.magFilter),g.push(P.minFilter),g.push(P.anisotropy),g.push(P.internalFormat),g.push(P.format),g.push(P.type),g.push(P.generateMipmaps),g.push(P.premultiplyAlpha),g.push(P.flipY),g.push(P.unpackAlignment),g.push(P.colorSpace),g.join()}function re(P,g){const q=n.get(P);if(P.isVideoTexture&&V(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){const H=P.image;if(H===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(q,P,g);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+g)}function ve(P,g){const q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Pe(q,P,g);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+g)}function we(P,g){const q=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Pe(q,P,g);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+g)}function fe(P,g){const q=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&q.__version!==P.version){ke(q,P,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+g)}const ge={[Ia]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},Ne={[Zt]:i.NEAREST,[Hh]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Ws]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},Me={[Xh]:i.NEVER,[Zh]:i.ALWAYS,[qh]:i.LESS,[To]:i.LEQUAL,[Yh]:i.EQUAL,[wo]:i.GEQUAL,[$h]:i.GREATER,[Kh]:i.NOTEQUAL};function He(P,g){if(g.type===Nn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===en||g.magFilter===Ws||g.magFilter===Fr||g.magFilter===Ti||g.minFilter===en||g.minFilter===Ws||g.minFilter===Fr||g.minFilter===Ti)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ge[g.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ge[g.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ge[g.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Ne[g.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Ne[g.minFilter]),g.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Me[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Zt||g.minFilter!==Fr&&g.minFilter!==Ti||g.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function K(P,g){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,g.addEventListener("dispose",N));const H=g.source;let te=M.get(H);te===void 0&&(te={},M.set(H,te));const xe=X(g);if(xe!==P.__cacheKey){te[xe]===void 0&&(te[xe]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,q=!0),te[xe].usedTimes++;const ye=te[P.__cacheKey];ye!==void 0&&(te[P.__cacheKey].usedTimes--,ye.usedTimes===0&&G(g)),P.__cacheKey=xe,P.__webglTexture=te[xe].texture}return q}function me(P,g,q){return Math.floor(Math.floor(P/q)/g)}function ue(P,g,q,H){const xe=P.updateRanges;if(xe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,q,H,g.data);else{xe.sort((Le,be)=>Le.start-be.start);let ye=0;for(let Le=1;Le<xe.length;Le++){const be=xe[ye],Se=xe[Le],ze=be.start+be.count,qe=me(Se.start,g.width,4),Qe=me(be.start,g.width,4);Se.start<=ze+1&&qe===Qe&&me(Se.start+Se.count-1,g.width,4)===qe?be.count=Math.max(be.count,Se.start+Se.count-be.start):(++ye,xe[ye]=Se)}xe.length=ye+1;const Z=t.getParameter(i.UNPACK_ROW_LENGTH),ce=t.getParameter(i.UNPACK_SKIP_PIXELS),Te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Le=0,be=xe.length;Le<be;Le++){const Se=xe[Le],ze=Math.floor(Se.start/4),qe=Math.ceil(Se.count/4),Qe=ze%g.width,B=Math.floor(ze/g.width),ne=qe,J=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,Qe,B,ne,J,q,H,g.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Z),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function Pe(P,g,q){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const te=K(P,g),xe=g.source;t.bindTexture(H,P.__webglTexture,i.TEXTURE0+q);const ye=n.get(xe);if(xe.version!==ye.__version||te===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const J=_t.getPrimaries(_t.workingColorSpace),he=g.colorSpace===fi?null:_t.getPrimaries(g.colorSpace),pe=g.colorSpace===fi||J===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let ce=x(g.image,!1,r.maxTextureSize);ce=Pt(g,ce);const Te=a.convert(g.format,g.colorSpace),Le=a.convert(g.type);let be=w(g.internalFormat,Te,Le,g.normalized,g.colorSpace,g.isVideoTexture);He(H,g);let Se;const ze=g.mipmaps,qe=g.isVideoTexture!==!0,Qe=ye.__version===void 0||te===!0,B=xe.dataReady,ne=C(g,ce);if(g.isDepthTexture)be=I(g.format===wi,g.type),Qe&&(qe?t.texStorage2D(i.TEXTURE_2D,1,be,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,be,ce.width,ce.height,0,Te,Le,null));else if(g.isDataTexture)if(ze.length>0){qe&&Qe&&t.texStorage2D(i.TEXTURE_2D,ne,be,ze[0].width,ze[0].height);for(let J=0,he=ze.length;J<he;J++)Se=ze[J],qe?B&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Se.width,Se.height,Te,Le,Se.data):t.texImage2D(i.TEXTURE_2D,J,be,Se.width,Se.height,0,Te,Le,Se.data);g.generateMipmaps=!1}else qe?(Qe&&t.texStorage2D(i.TEXTURE_2D,ne,be,ce.width,ce.height),B&&ue(g,ce,Te,Le)):t.texImage2D(i.TEXTURE_2D,0,be,ce.width,ce.height,0,Te,Le,ce.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){qe&&Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,be,ze[0].width,ze[0].height,ce.depth);for(let J=0,he=ze.length;J<he;J++)if(Se=ze[J],g.format!==Cn)if(Te!==null)if(qe){if(B)if(g.layerUpdates.size>0){const pe=kl(Se.width,Se.height,g.format,g.type);for(const oe of g.layerUpdates){const de=Se.data.subarray(oe*pe/Se.data.BYTES_PER_ELEMENT,(oe+1)*pe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,oe,Se.width,Se.height,1,Te,de)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Se.width,Se.height,ce.depth,Te,Se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,be,Se.width,Se.height,ce.depth,0,Se.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Se.width,Se.height,ce.depth,Te,Le,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,be,Se.width,Se.height,ce.depth,0,Te,Le,Se.data)}else{qe&&Qe&&t.texStorage2D(i.TEXTURE_2D,ne,be,ze[0].width,ze[0].height);for(let J=0,he=ze.length;J<he;J++)Se=ze[J],g.format!==Cn?Te!==null?qe?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Se.width,Se.height,Te,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,J,be,Se.width,Se.height,0,Se.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?B&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Se.width,Se.height,Te,Le,Se.data):t.texImage2D(i.TEXTURE_2D,J,be,Se.width,Se.height,0,Te,Le,Se.data)}else if(g.isDataArrayTexture)if(qe){if(Qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ne,be,ce.width,ce.height,ce.depth),B)if(g.layerUpdates.size>0){const J=kl(ce.width,ce.height,g.format,g.type);for(const he of g.layerUpdates){const pe=ce.data.subarray(he*J/ce.data.BYTES_PER_ELEMENT,(he+1)*J/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,ce.width,ce.height,1,Te,Le,pe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Te,Le,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ce.width,ce.height,ce.depth,0,Te,Le,ce.data);else if(g.isData3DTexture)qe?(Qe&&t.texStorage3D(i.TEXTURE_3D,ne,be,ce.width,ce.height,ce.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Te,Le,ce.data)):t.texImage3D(i.TEXTURE_3D,0,be,ce.width,ce.height,ce.depth,0,Te,Le,ce.data);else if(g.isFramebufferTexture){if(Qe)if(qe)t.texStorage2D(i.TEXTURE_2D,ne,be,ce.width,ce.height);else{let J=ce.width,he=ce.height;for(let pe=0;pe<ne;pe++)t.texImage2D(i.TEXTURE_2D,pe,be,J,he,0,Te,Le,null),J>>=1,he>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const J=i.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ce.parentNode!==J){J.appendChild(ce),v.add(g),J.onpaint=he=>{const pe=he.changedElements;for(const oe of v)pe.includes(oe.image)&&(oe.needsUpdate=!0)},J.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ce);else{const pe=i.RGBA,oe=i.RGBA,de=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pe,oe,de,ce)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ze.length>0){if(qe&&Qe){const J=mt(ze[0]);t.texStorage2D(i.TEXTURE_2D,ne,be,J.width,J.height)}for(let J=0,he=ze.length;J<he;J++)Se=ze[J],qe?B&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,Te,Le,Se):t.texImage2D(i.TEXTURE_2D,J,be,Te,Le,Se);g.generateMipmaps=!1}else if(qe){if(Qe){const J=mt(ce);t.texStorage2D(i.TEXTURE_2D,ne,be,J.width,J.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Le,ce)}else t.texImage2D(i.TEXTURE_2D,0,be,Te,Le,ce);m(g)&&U(H),ye.__version=xe.version,g.onUpdate&&g.onUpdate(g)}P.__version=g.version}function ke(P,g,q){if(g.image.length!==6)return;const H=K(P,g),te=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+q);const xe=n.get(te);if(te.version!==xe.__version||H===!0){t.activeTexture(i.TEXTURE0+q);const ye=_t.getPrimaries(_t.workingColorSpace),Z=g.colorSpace===fi?null:_t.getPrimaries(g.colorSpace),ce=g.colorSpace===fi||ye===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);const Te=g.isCompressedTexture||g.image[0].isCompressedTexture,Le=g.image[0]&&g.image[0].isDataTexture,be=[];for(let oe=0;oe<6;oe++)!Te&&!Le?be[oe]=x(g.image[oe],!0,r.maxCubemapSize):be[oe]=Le?g.image[oe].image:g.image[oe],be[oe]=Pt(g,be[oe]);const Se=be[0],ze=a.convert(g.format,g.colorSpace),qe=a.convert(g.type),Qe=w(g.internalFormat,ze,qe,g.normalized,g.colorSpace),B=g.isVideoTexture!==!0,ne=xe.__version===void 0||H===!0,J=te.dataReady;let he=C(g,Se);He(i.TEXTURE_CUBE_MAP,g);let pe;if(Te){B&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Qe,Se.width,Se.height);for(let oe=0;oe<6;oe++){pe=be[oe].mipmaps;for(let de=0;de<pe.length;de++){const Re=pe[de];g.format!==Cn?ze!==null?B?J&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de,0,0,Re.width,Re.height,ze,Re.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de,Qe,Re.width,Re.height,0,Re.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de,0,0,Re.width,Re.height,ze,qe,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de,Qe,Re.width,Re.height,0,ze,qe,Re.data)}}}else{if(pe=g.mipmaps,B&&ne){pe.length>0&&he++;const oe=mt(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,he,Qe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Le){B?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,be[oe].width,be[oe].height,ze,qe,be[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,be[oe].width,be[oe].height,0,ze,qe,be[oe].data);for(let de=0;de<pe.length;de++){const je=pe[de].image[oe].image;B?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de+1,0,0,je.width,je.height,ze,qe,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de+1,Qe,je.width,je.height,0,ze,qe,je.data)}}else{B?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ze,qe,be[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Qe,ze,qe,be[oe]);for(let de=0;de<pe.length;de++){const Re=pe[de];B?J&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de+1,0,0,ze,qe,Re.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de+1,Qe,ze,qe,Re.image[oe])}}}m(g)&&U(i.TEXTURE_CUBE_MAP),xe.__version=te.version,g.onUpdate&&g.onUpdate(g)}P.__version=g.version}function Ge(P,g,q,H,te,xe){const ye=a.convert(q.format,q.colorSpace),Z=a.convert(q.type),ce=w(q.internalFormat,ye,Z,q.normalized,q.colorSpace),Te=n.get(g),Le=n.get(q);if(Le.__renderTarget=g,!Te.__hasExternalTextures){const be=Math.max(1,g.width>>xe),Se=Math.max(1,g.height>>xe);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,xe,ce,be,Se,g.depth,0,ye,Z,null):t.texImage2D(te,xe,ce,be,Se,0,ye,Z,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),At(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,te,Le.__webglTexture,0,Mt(g)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,te,Le.__webglTexture,xe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(P,g,q){if(i.bindRenderbuffer(i.RENDERBUFFER,P),g.depthBuffer){const H=g.depthTexture,te=H&&H.isDepthTexture?H.type:null,xe=I(g.stencilBuffer,te),ye=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;At(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(g),xe,g.width,g.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(g),xe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,xe,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,P)}else{const H=g.textures;for(let te=0;te<H.length;te++){const xe=H[te],ye=a.convert(xe.format,xe.colorSpace),Z=a.convert(xe.type),ce=w(xe.internalFormat,ye,Z,xe.normalized,xe.colorSpace);At(g)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt(g),ce,g.width,g.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt(g),ce,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ce,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function We(P,g,q){const H=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=n.get(g.depthTexture);if(te.__renderTarget=g,(!te.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(te.__webglInit===void 0&&(te.__webglInit=!0,g.depthTexture.addEventListener("dispose",N)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),He(i.TEXTURE_CUBE_MAP,g.depthTexture);const Te=a.convert(g.depthTexture.format),Le=a.convert(g.depthTexture.type);let be;g.depthTexture.format===Qn?be=i.DEPTH_COMPONENT24:g.depthTexture.format===wi&&(be=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,be,g.width,g.height,0,Te,Le,null)}}else re(g.depthTexture,0);const xe=te.__webglTexture,ye=Mt(g),Z=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,ce=g.depthTexture.format===wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Qn)At(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,Z,xe,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,ce,Z,xe,0);else if(g.depthTexture.format===wi)At(g)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,Z,xe,0,ye):i.framebufferTexture2D(i.FRAMEBUFFER,ce,Z,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(P){const g=n.get(P),q=P.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==P.depthTexture){const H=P.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const te=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",te)};H.addEventListener("dispose",te),g.__depthDisposeCallback=te}g.__boundDepthTexture=H}if(P.depthTexture&&!g.__autoAllocateDepthBuffer)if(q)for(let H=0;H<6;H++)We(g.__webglFramebuffer[H],P,H);else{const H=P.texture.mipmaps;H&&H.length>0?We(g.__webglFramebuffer[0],P,0):We(g.__webglFramebuffer,P,0)}else if(q){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),ct(g.__webglDepthbuffer[H],P,!1);else{const te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,xe)}}else{const H=P.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ct(g.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,xe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,xe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(P,g,q){const H=n.get(P);g!==void 0&&Ge(H.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&$e(P)}function Ye(P){const g=P.texture,q=n.get(P),H=n.get(g);P.addEventListener("dispose",E);const te=P.textures,xe=P.isWebGLCubeRenderTarget===!0,ye=te.length>1;if(ye||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,l.memory.textures++),xe){q.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0){q.__webglFramebuffer[Z]=[];for(let ce=0;ce<g.mipmaps.length;ce++)q.__webglFramebuffer[Z][ce]=i.createFramebuffer()}else q.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){q.__webglFramebuffer=[];for(let Z=0;Z<g.mipmaps.length;Z++)q.__webglFramebuffer[Z]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ye)for(let Z=0,ce=te.length;Z<ce;Z++){const Te=n.get(te[Z]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),l.memory.textures++)}if(P.samples>0&&At(P)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Z=0;Z<te.length;Z++){const ce=te[Z];q.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Z]);const Te=a.convert(ce.format,ce.colorSpace),Le=a.convert(ce.type),be=w(ce.internalFormat,Te,Le,ce.normalized,ce.colorSpace,P.isXRRenderTarget===!0),Se=Mt(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,be,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,q.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ct(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(xe){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),He(i.TEXTURE_CUBE_MAP,g);for(let Z=0;Z<6;Z++)if(g.mipmaps&&g.mipmaps.length>0)for(let ce=0;ce<g.mipmaps.length;ce++)Ge(q.__webglFramebuffer[Z][ce],P,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ce);else Ge(q.__webglFramebuffer[Z],P,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(g)&&U(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let Z=0,ce=te.length;Z<ce;Z++){const Te=te[Z],Le=n.get(Te);let be=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(be=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Le.__webglTexture),He(be,Te),Ge(q.__webglFramebuffer,P,Te,i.COLOR_ATTACHMENT0+Z,be,0),m(Te)&&U(be)}t.unbindTexture()}else{let Z=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Z=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,H.__webglTexture),He(Z,g),g.mipmaps&&g.mipmaps.length>0)for(let ce=0;ce<g.mipmaps.length;ce++)Ge(q.__webglFramebuffer[ce],P,g,i.COLOR_ATTACHMENT0,Z,ce);else Ge(q.__webglFramebuffer,P,g,i.COLOR_ATTACHMENT0,Z,0);m(g)&&U(Z),t.unbindTexture()}P.depthBuffer&&$e(P)}function dt(P){const g=P.textures;for(let q=0,H=g.length;q<H;q++){const te=g[q];if(m(te)){const xe=F(P),ye=n.get(te).__webglTexture;t.bindTexture(xe,ye),U(xe),t.unbindTexture()}}}const xt=[],Et=[];function St(P){if(P.samples>0){if(At(P)===!1){const g=P.textures,q=P.width,H=P.height;let te=i.COLOR_BUFFER_BIT;const xe=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(P),Z=g.length>1;if(Z)for(let Te=0;Te<g.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const ce=P.texture.mipmaps;ce&&ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Te=0;Te<g.length;Te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);const Le=n.get(g[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Le,0)}i.blitFramebuffer(0,0,q,H,0,0,q,H,te,i.NEAREST),f===!0&&(xt.length=0,Et.length=0,xt.push(i.COLOR_ATTACHMENT0+Te),P.depthBuffer&&P.resolveDepthBuffer===!1&&(xt.push(xe),Et.push(xe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let Te=0;Te<g.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);const Le=n.get(g[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,Le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&f){const g=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Mt(P){return Math.min(r.maxSamples,P.samples)}function At(P){const g=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function V(P){const g=l.render.frame;_.get(P)!==g&&(_.set(P,g),P.update())}function Pt(P,g){const q=P.colorSpace,H=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==vs&&q!==fi&&(_t.getTransfer(q)===Tt?(H!==Cn||te!==dn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):vt("WebGLTextures: Unsupported texture color space:",q)),g}function mt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(h.width=P.naturalWidth||P.width,h.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(h.width=P.displayWidth,h.height=P.displayHeight):(h.width=P.width,h.height=P.height),h}this.allocateTextureUnit=le,this.resetTextureUnits=se,this.getTextureUnits=ae,this.setTextureUnits=j,this.setTexture2D=re,this.setTexture2DArray=ve,this.setTexture3D=we,this.setTextureCube=fe,this.rebindTextures=Ze,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=At,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xg(i,e){function t(n,r=fi){let a;const l=_t.getTransfer(r);if(n===dn)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ec)return i.BYTE;if(n===yc)return i.SHORT;if(n===yr)return i.UNSIGNED_SHORT;if(n===xo)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===jn)return i.HALF_FLOAT;if(n===wc)return i.ALPHA;if(n===Ac)return i.RGB;if(n===Cn)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===Rc)return i.RED;if(n===Eo)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===yo)return i.RG_INTEGER;if(n===bo)return i.RGBA_INTEGER;if(n===hs||n===fs||n===ds||n===ps)if(l===Tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ps)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ds)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ps)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Fa||n===Oa||n===Ba)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Na)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===za||n===Va||n===Ha||n===Ga||n===_s||n===Wa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===ka||n===za)return l===Tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Va)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ha)return a.COMPRESSED_R11_EAC;if(n===Ga)return a.COMPRESSED_SIGNED_R11_EAC;if(n===_s)return a.COMPRESSED_RG11_EAC;if(n===Wa)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===$a||n===Ka||n===Za||n===Ja||n===ja||n===Qa||n===eo||n===to||n===no||n===io||n===ro)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Xa)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$a)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ka)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ro)return l===Tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===ao||n===oo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===so)return l===Tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lo||n===co||n===gs||n===uo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===lo)return a.COMPRESSED_RED_RGTC1_EXT;if(n===co)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===uo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Fc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vn({vertexShader:qg,fragmentShader:Yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new Rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kg extends gi{constructor(e,t){super();const n=this;let r=null,a=1,l=null,c="local-floor",f=1,h=null,_=null,v=null,p=null,M=null,b=null;const A=typeof XRWebGLBinding<"u",x=new $g,m={},U=t.getContextAttributes();let F=null,w=null;const I=[],C=[],N=new nt;let E=null;const D=new vn;D.viewport=new Ut;const G=new vn;G.viewport=new Ut;const z=[D,G],ee=new id;let se=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let me=I[K];return me===void 0&&(me=new Zs,I[K]=me),me.getTargetRaySpace()},this.getControllerGrip=function(K){let me=I[K];return me===void 0&&(me=new Zs,I[K]=me),me.getGripSpace()},this.getHand=function(K){let me=I[K];return me===void 0&&(me=new Zs,I[K]=me),me.getHandSpace()};function j(K){const me=C.indexOf(K.inputSource);if(me===-1)return;const ue=I[me];ue!==void 0&&(ue.update(K.inputSource,K.frame,h||l),ue.dispatchEvent({type:K.type,data:K.inputSource}))}function le(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",le),r.removeEventListener("inputsourceschange",X);for(let K=0;K<I.length;K++){const me=C[K];me!==null&&(C[K]=null,I[K].disconnect(me))}se=null,ae=null,x.reset();for(const K in m)delete m[K];e.setRenderTarget(F),M=null,p=null,v=null,r=null,w=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){c=K,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||l},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return p!==null?p:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(r,t)),v},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(F=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",le),r.addEventListener("inputsourceschange",X),U.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(N),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Pe=null,ke=null;U.depth&&(ke=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=U.stencil?wi:Qn,Pe=U.stencil?br:zn);const Ge={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:a};v=this.getBinding(),p=v.createProjectionLayer(Ge),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new Bn(p.textureWidth,p.textureHeight,{format:Cn,type:dn,depthTexture:new sr(p.textureWidth,p.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ue={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:a};M=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new Bn(M.framebufferWidth,M.framebufferHeight,{format:Cn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(f),h=null,l=await r.requestReferenceSpace(c),He.setContext(r),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(K){for(let me=0;me<K.removed.length;me++){const ue=K.removed[me],Pe=C.indexOf(ue);Pe>=0&&(C[Pe]=null,I[Pe].disconnect(ue))}for(let me=0;me<K.added.length;me++){const ue=K.added[me];let Pe=C.indexOf(ue);if(Pe===-1){for(let Ge=0;Ge<I.length;Ge++)if(Ge>=C.length){C.push(ue),Pe=Ge;break}else if(C[Ge]===null){C[Ge]=ue,Pe=Ge;break}if(Pe===-1)break}const ke=I[Pe];ke&&ke.connect(ue)}}const re=new k,ve=new k;function we(K,me,ue){re.setFromMatrixPosition(me.matrixWorld),ve.setFromMatrixPosition(ue.matrixWorld);const Pe=re.distanceTo(ve),ke=me.projectionMatrix.elements,Ge=ue.projectionMatrix.elements,ct=ke[14]/(ke[10]-1),We=ke[14]/(ke[10]+1),$e=(ke[9]+1)/ke[5],Ze=(ke[9]-1)/ke[5],Ye=(ke[8]-1)/ke[0],dt=(Ge[8]+1)/Ge[0],xt=ct*Ye,Et=ct*dt,St=Pe/(-Ye+dt),Mt=St*-Ye;if(me.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Mt),K.translateZ(St),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ke[10]===-1)K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const At=ct+St,V=We+St,Pt=xt-Mt,mt=Et+(Pe-Mt),P=$e*We/V*At,g=Ze*We/V*At;K.projectionMatrix.makePerspective(Pt,mt,P,g,At,V),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function fe(K,me){me===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(me.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let me=K.near,ue=K.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(ue=x.depthFar)),ee.near=G.near=D.near=me,ee.far=G.far=D.far=ue,(se!==ee.near||ae!==ee.far)&&(r.updateRenderState({depthNear:ee.near,depthFar:ee.far}),se=ee.near,ae=ee.far),ee.layers.mask=K.layers.mask|6,D.layers.mask=ee.layers.mask&-5,G.layers.mask=ee.layers.mask&-3;const Pe=K.parent,ke=ee.cameras;fe(ee,Pe);for(let Ge=0;Ge<ke.length;Ge++)fe(ke[Ge],Pe);ke.length===2?we(ee,D,G):ee.projectionMatrix.copy(D.projectionMatrix),ge(K,ee,Pe)};function ge(K,me,ue){ue===null?K.matrix.copy(me.matrixWorld):(K.matrix.copy(ue.matrixWorld),K.matrix.invert(),K.matrix.multiply(me.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(me.projectionMatrix),K.projectionMatrixInverse.copy(me.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=wr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(p===null&&M===null))return f},this.setFoveation=function(K){f=K,p!==null&&(p.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ee)},this.getCameraTexture=function(K){return m[K]};let Ne=null;function Me(K,me){if(_=me.getViewerPose(h||l),b=me,_!==null){const ue=_.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let Pe=!1;ue.length!==ee.cameras.length&&(ee.cameras.length=0,Pe=!0);for(let We=0;We<ue.length;We++){const $e=ue[We];let Ze=null;if(M!==null)Ze=M.getViewport($e);else{const dt=v.getViewSubImage(p,$e);Ze=dt.viewport,We===0&&(e.setRenderTargetTextures(w,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(w))}let Ye=z[We];Ye===void 0&&(Ye=new vn,Ye.layers.enable(We),Ye.viewport=new Ut,z[We]=Ye),Ye.matrix.fromArray($e.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray($e.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),We===0&&(ee.matrix.copy(Ye.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Pe===!0&&ee.cameras.push(Ye)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){v=n.getBinding();const We=v.getDepthInformation(ue[0]);We&&We.isValid&&We.texture&&x.init(We,r.renderState)}if(ke&&ke.includes("camera-access")&&A){e.state.unbindTexture(),v=n.getBinding();for(let We=0;We<ue.length;We++){const $e=ue[We].camera;if($e){let Ze=m[$e];Ze||(Ze=new Fc,m[$e]=Ze);const Ye=v.getCameraImage($e);Ze.sourceTexture=Ye}}}}for(let ue=0;ue<I.length;ue++){const Pe=C[ue],ke=I[ue];Pe!==null&&ke!==void 0&&ke.update(Pe,me,h||l)}Ne&&Ne(K,me),me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:me}),b=null}const He=new zc;He.setAnimationLoop(Me),this.setAnimationLoop=function(K){Ne=K},this.dispose=function(){}}}const Zg=new Dt,Yc=new st;Yc.set(-1,0,0,0,1,0,0,0,1);function Jg(i,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function n(x,m){m.color.getRGB(x.fogColor.value,Oc(i)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function r(x,m,U,F,w){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?a(x,m):m.isMeshLambertMaterial?(a(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(x,m),v(x,m)):m.isMeshPhongMaterial?(a(x,m),_(x,m),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(x,m),p(x,m),m.isMeshPhysicalMaterial&&M(x,m,w)):m.isMeshMatcapMaterial?(a(x,m),b(x,m)):m.isMeshDepthMaterial?a(x,m):m.isMeshDistanceMaterial?(a(x,m),A(x,m)):m.isMeshNormalMaterial?a(x,m):m.isLineBasicMaterial?(l(x,m),m.isLineDashedMaterial&&c(x,m)):m.isPointsMaterial?f(x,m,U,F):m.isSpriteMaterial?h(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===cn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===cn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const U=e.get(m),F=U.envMap,w=U.envMapRotation;F&&(x.envMap.value=F,x.envMapRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(w)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Yc),x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function l(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function c(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function f(x,m,U,F){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*U,x.scale.value=F*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function h(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function _(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function v(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function p(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function M(x,m,U){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=U.texture,x.transmissionSamplerSize.value.set(U.width,U.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,m){m.matcap&&(x.matcap.value=m.matcap)}function A(x,m){const U=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(U.matrixWorld),x.nearDistance.value=U.shadow.camera.near,x.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jg(i,e,t,n){let r={},a={},l=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(w,I){const C=I.program;n.uniformBlockBinding(w,C)}function h(w,I){let C=r[w.id];C===void 0&&(x(w),C=_(w),r[w.id]=C,w.addEventListener("dispose",U));const N=I.program;n.updateUBOMapping(w,N);const E=e.render.frame;a[w.id]!==E&&(p(w),a[w.id]=E)}function _(w){const I=v();w.__bindingPointIndex=I;const C=i.createBuffer(),N=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,N,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,C),C}function v(){for(let w=0;w<c;w++)if(l.indexOf(w)===-1)return l.push(w),w;return vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const I=r[w.id],C=w.uniforms,N=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let E=0,D=C.length;E<D;E++){const G=C[E];if(Array.isArray(G))for(let z=0,ee=G.length;z<ee;z++)M(G[z],E,z,N);else M(G,E,0,N)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(w,I,C,N){if(A(w,I,C,N)===!0){const E=w.__offset,D=w.value;if(Array.isArray(D)){let G=0;for(let z=0;z<D.length;z++){const ee=D[z],se=m(ee);b(ee,w.__data,G),typeof ee!="number"&&typeof ee!="boolean"&&!ee.isMatrix3&&!ArrayBuffer.isView(ee)&&(G+=se.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(D,w.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,w.__data)}}function b(w,I,C){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,C)}function A(w,I,C,N){const E=w.value,D=I+"_"+C;if(N[D]===void 0)return typeof E=="number"||typeof E=="boolean"?N[D]=E:ArrayBuffer.isView(E)?N[D]=E.slice():N[D]=E.clone(),!0;{const G=N[D];if(typeof E=="number"||typeof E=="boolean"){if(G!==E)return N[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(G.equals(E)===!1)return G.copy(E),!0}}return!1}function x(w){const I=w.uniforms;let C=0;const N=16;for(let D=0,G=I.length;D<G;D++){const z=Array.isArray(I[D])?I[D]:[I[D]];for(let ee=0,se=z.length;ee<se;ee++){const ae=z[ee],j=Array.isArray(ae.value)?ae.value:[ae.value];for(let le=0,X=j.length;le<X;le++){const re=j[le],ve=m(re),we=C%N,fe=we%ve.boundary,ge=we+fe;C+=fe,ge!==0&&N-ge<ve.storage&&(C+=N-ge),ae.__data=new Float32Array(ve.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=C,C+=ve.storage}}}const E=C%N;return E>0&&(C+=N-E),w.__size=C,w.__cache={},this}function m(w){const I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",w),I}function U(w){const I=w.target;I.removeEventListener("dispose",U);const C=l.indexOf(I.__bindingPointIndex);l.splice(C,1),i.deleteBuffer(r[I.id]),delete r[I.id],delete a[I.id]}function F(){for(const w in r)i.deleteBuffer(r[w]);l=[],r={},a={}}return{bind:f,update:h,dispose:F}}const Qg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function e0(){return In===null&&(In=new Of(Qg,16,16,Ri,jn),In.name="DFG_LUT",In.minFilter=en,In.magFilter=en,In.wrapS=Kn,In.wrapT=Kn,In.generateMipmaps=!1,In.needsUpdate=!0),In}class t0{constructor(e={}){const{canvas:t=jh(),context:n=null,depth:r=!0,stencil:a=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:h=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:p=!1,outputBufferType:M=dn}=e;this.isWebGLRenderer=!0;let b;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=n.getContextAttributes().alpha}else b=l;const A=M,x=new Set([bo,yo,Eo]),m=new Set([dn,zn,yr,br,Mo,So]),U=new Uint32Array(4),F=new Int32Array(4),w=new k;let I=null,C=null;const N=[],E=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const G=this;let z=!1,ee=null,se=null,ae=null,j=null;this._outputColorSpace=gn;let le=0,X=0,re=null,ve=-1,we=null;const fe=new Ut,ge=new Ut;let Ne=null;const Me=new ft(0);let He=0,K=t.width,me=t.height,ue=1,Pe=null,ke=null;const Ge=new Ut(0,0,K,me),ct=new Ut(0,0,K,me);let We=!1;const $e=new Do;let Ze=!1,Ye=!1;const dt=new Dt,xt=new k,Et=new Ut,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function At(){return re===null?ue:1}let V=n;function Pt(T,W){return t.getContext(T,W)}try{const T={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:f,preserveDrawingBuffer:h,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${vo}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Nt,!1),V===null){const W="webgl2";if(V=Pt(W,T),V===null)throw Pt(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw vt("WebGLRenderer: "+T.message),T}let mt,P,g,q,H,te,xe,ye,Z,ce,Te,Le,be,Se,ze,qe,Qe,B,ne,J,he,pe,oe;function de(){mt=new e_(V),mt.init(),he=new Xg(V,mt),P=new qm(V,mt,e,he),g=new Gg(V,mt),P.reversedDepthBuffer&&p&&g.buffers.depth.setReversed(!0),se=V.createFramebuffer(),ae=V.createFramebuffer(),j=V.createFramebuffer(),q=new i_(V),H=new Cg,te=new Wg(V,mt,g,H,P,he,q),xe=new Qm(G),ye=new od(V),pe=new Wm(V,ye),Z=new t_(V,ye,q,pe),ce=new s_(V,Z,ye,pe,q),B=new r_(V,P,te),ze=new Ym(H),Te=new Rg(G,xe,mt,P,pe,ze),Le=new Jg(G,H),be=new Dg,Se=new Og(mt),Qe=new Gm(G,xe,g,ce,b,f),qe=new Hg(G,ce,P),oe=new jg(V,q,P,g),ne=new Xm(V,mt,q),J=new n_(V,mt,q),q.programs=Te.programs,G.capabilities=P,G.extensions=mt,G.properties=H,G.renderLists=be,G.shadowMap=qe,G.state=g,G.info=q}de(),A!==dn&&(D=new o_(A,t.width,t.height,c,r,a));const Re=new Kg(G,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const T=mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(T){T!==void 0&&(ue=T,this.setSize(K,me,!1))},this.getSize=function(T){return T.set(K,me)},this.setSize=function(T,W,Q=!0){if(Re.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,me=W,t.width=Math.floor(T*ue),t.height=Math.floor(W*ue),Q===!0&&(t.style.width=T+"px",t.style.height=W+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(K*ue,me*ue).floor()},this.setDrawingBufferSize=function(T,W,Q){K=T,me=W,ue=Q,t.width=Math.floor(T*Q),t.height=Math.floor(W*Q),this.setViewport(0,0,T,W)},this.setEffects=function(T){if(A===dn){vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let W=0;W<T.length;W++)if(T[W].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(fe)},this.getViewport=function(T){return T.copy(Ge)},this.setViewport=function(T,W,Q,Y){T.isVector4?Ge.set(T.x,T.y,T.z,T.w):Ge.set(T,W,Q,Y),g.viewport(fe.copy(Ge).multiplyScalar(ue).round())},this.getScissor=function(T){return T.copy(ct)},this.setScissor=function(T,W,Q,Y){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,W,Q,Y),g.scissor(ge.copy(ct).multiplyScalar(ue).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(T){g.setScissorTest(We=T)},this.setOpaqueSort=function(T){Pe=T},this.setTransparentSort=function(T){ke=T},this.getClearColor=function(T){return T.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor(...arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha(...arguments)},this.clear=function(T=!0,W=!0,Q=!0){let Y=0;if(T){let $=!1;if(re!==null){const Ae=re.texture.format;$=x.has(Ae)}if($){const Ae=re.texture.type,Ie=m.has(Ae),Ee=Qe.getClearColor(),Ve=Qe.getClearAlpha(),Xe=Ee.r,rt=Ee.g,at=Ee.b;Ie?(U[0]=Xe,U[1]=rt,U[2]=at,U[3]=Ve,V.clearBufferuiv(V.COLOR,0,U)):(F[0]=Xe,F[1]=rt,F[2]=at,F[3]=Ve,V.clearBufferiv(V.COLOR,0,F))}else Y|=V.COLOR_BUFFER_BIT}W&&(Y|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),ee=T},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Nt,!1),Qe.dispose(),be.dispose(),Se.dispose(),H.dispose(),xe.dispose(),ce.dispose(),pe.dispose(),oe.dispose(),Te.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",ei),Re.removeEventListener("sessionend",ti),nn.stop()};function je(T){T.preventDefault(),cl("WebGLRenderer: Context Lost."),z=!0}function et(){cl("WebGLRenderer: Context Restored."),z=!1;const T=q.autoReset,W=qe.enabled,Q=qe.autoUpdate,Y=qe.needsUpdate,$=qe.type;de(),q.autoReset=T,qe.enabled=W,qe.autoUpdate=Q,qe.needsUpdate=Y,qe.type=$}function Nt(T){vt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function kt(T){const W=T.target;W.removeEventListener("dispose",kt),Hn(W)}function Hn(T){vi(T),H.remove(T)}function vi(T){const W=H.get(T).programs;W!==void 0&&(W.forEach(function(Q){Te.releaseProgram(Q)}),T.isShaderMaterial&&Te.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,Q,Y,$,Ae){W===null&&(W=St);const Ie=$.isMesh&&$.matrixWorld.determinantAffine()<0,Ee=Ls(T,W,Q,Y,$);g.setMaterial(Y,Ie);let Ve=Q.index,Xe=1;if(Y.wireframe===!0){if(Ve=Z.getWireframeAttribute(Q),Ve===void 0)return;Xe=2}const rt=Q.drawRange,at=Q.attributes.position;let Oe=rt.start*Xe,pt=(rt.start+rt.count)*Xe;Ae!==null&&(Oe=Math.max(Oe,Ae.start*Xe),pt=Math.min(pt,(Ae.start+Ae.count)*Xe)),Ve!==null?(Oe=Math.max(Oe,0),pt=Math.min(pt,Ve.count)):at!=null&&(Oe=Math.max(Oe,0),pt=Math.min(pt,at.count));const Lt=pt-Oe;if(Lt<0||Lt===1/0)return;pe.setup($,Y,Ee,Q,Ve);let Rt,ht=ne;if(Ve!==null&&(Rt=ye.get(Ve),ht=J,ht.setIndex(Rt)),$.isMesh)Y.wireframe===!0?(g.setLineWidth(Y.wireframeLinewidth*At()),ht.setMode(V.LINES)):ht.setMode(V.TRIANGLES);else if($.isLine){let Ft=Y.linewidth;Ft===void 0&&(Ft=1),g.setLineWidth(Ft*At()),$.isLineSegments?ht.setMode(V.LINES):$.isLineLoop?ht.setMode(V.LINE_LOOP):ht.setMode(V.LINE_STRIP)}else $.isPoints?ht.setMode(V.POINTS):$.isSprite&&ht.setMode(V.TRIANGLES);if($.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))ht.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ft=$._multiDrawStarts,Ue=$._multiDrawCounts,rn=$._multiDrawCount,Ke=Ve?ye.get(Ve).bytesPerElement:1,Jt=H.get(Y).currentProgram.getUniforms();for(let mn=0;mn<rn;mn++)Jt.setValue(V,"_gl_DrawID",mn),ht.render(Ft[mn]/Ke,Ue[mn])}else if($.isInstancedMesh)ht.renderInstances(Oe,Lt,$.count);else if(Q.isInstancedBufferGeometry){const Ft=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ue=Math.min(Q.instanceCount,Ft);ht.renderInstances(Oe,Lt,Ue)}else ht.render(Oe,Lt)};function S(T,W,Q){T.transparent===!0&&T.side===Rn&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,Di(T,W,Q),T.side=pi,T.needsUpdate=!0,Di(T,W,Q),T.side=Rn):Di(T,W,Q)}this.compile=function(T,W,Q=null){Q===null&&(Q=T),C=Se.get(Q),C.init(W),E.push(C),Q.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),T!==Q&&T.traverseVisible(function($){$.isLight&&$.layers.test(W.layers)&&(C.pushLight($),$.castShadow&&C.pushShadow($))}),C.setupLights();const Y=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ae=$.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){const Ee=Ae[Ie];S(Ee,Q,$),Y.add(Ee)}else S(Ae,Q,$),Y.add(Ae)}),C=E.pop(),Y},this.compileAsync=function(T,W,Q=null){const Y=this.compile(T,W,Q);return new Promise($=>{function Ae(){if(Y.forEach(function(Ie){H.get(Ie).currentProgram.isReady()&&Y.delete(Ie)}),Y.size===0){$(T);return}setTimeout(Ae,10)}mt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let un=null;function ut(T){un&&un(T)}function ei(){nn.stop()}function ti(){nn.start()}const nn=new zc;nn.setAnimationLoop(ut),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(T){un=T,Re.setAnimationLoop(T),T===null?nn.stop():nn.start()},Re.addEventListener("sessionstart",ei),Re.addEventListener("sessionend",ti),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;ee!==null&&ee.renderStart(T,W);const Q=Re.enabled===!0&&Re.isPresenting===!0,Y=D!==null&&(re===null||Q)&&D.begin(G,re);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(W),W=Re.getCamera()),T.isScene===!0&&T.onBeforeRender(G,T,W,re),C=Se.get(T,E.length),C.init(W),C.state.textureUnits=te.getTextureUnits(),E.push(C),dt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$e.setFromProjectionMatrix(dt,Fn,W.reversedDepth),Ye=this.localClippingEnabled,Ze=ze.init(this.clippingPlanes,Ye),I=be.get(T,N.length),I.init(),N.push(I),Re.enabled===!0&&Re.isPresenting===!0){const Ie=G.xr.getDepthSensingMesh();Ie!==null&&pn(Ie,W,-1/0,G.sortObjects)}pn(T,W,0,G.sortObjects),I.finish(),G.sortObjects===!0&&I.sort(Pe,ke,W.reversedDepth),Mt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Mt&&Qe.addToRenderList(I,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&ze.beginShadows();const $=C.state.shadowsArray;if(qe.render($,T,W),Ze===!0&&ze.endShadows(),(Y&&D.hasRenderPass())===!1){const Ie=I.opaque,Ee=I.transmissive;if(C.setupLights(),W.isArrayCamera){const Ve=W.cameras;if(Ee.length>0)for(let Xe=0,rt=Ve.length;Xe<rt;Xe++){const at=Ve[Xe];Rr(Ie,Ee,T,at)}Mt&&Qe.render(T);for(let Xe=0,rt=Ve.length;Xe<rt;Xe++){const at=Ve[Xe];Ci(I,T,at,at.viewport)}}else Ee.length>0&&Rr(Ie,Ee,T,W),Mt&&Qe.render(T),Ci(I,T,W)}re!==null&&X===0&&(te.updateMultisampleRenderTarget(re),te.updateRenderTargetMipmap(re)),Y&&D.end(G),T.isScene===!0&&T.onAfterRender(G,T,W),pe.resetDefaultState(),ve=-1,we=null,E.pop(),E.length>0?(C=E[E.length-1],te.setTextureUnits(C.state.textureUnits),Ze===!0&&ze.setGlobalState(G.clippingPlanes,C.state.camera)):C=null,N.pop(),N.length>0?I=N[N.length-1]:I=null,ee!==null&&ee.renderEnd()};function pn(T,W,Q,Y){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLightProbeGrid)C.pushLightProbeGrid(T);else if(T.isLight)C.pushLight(T),T.castShadow&&C.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$e.intersectsSprite(T)){Y&&Et.setFromMatrixPosition(T.matrixWorld).applyMatrix4(dt);const Ie=ce.update(T),Ee=T.material;Ee.visible&&I.push(T,Ie,Ee,Q,Et.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$e.intersectsObject(T))){const Ie=ce.update(T),Ee=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Et.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Et.copy(Ie.boundingSphere.center)),Et.applyMatrix4(T.matrixWorld).applyMatrix4(dt)),Array.isArray(Ee)){const Ve=Ie.groups;for(let Xe=0,rt=Ve.length;Xe<rt;Xe++){const at=Ve[Xe],Oe=Ee[at.materialIndex];Oe&&Oe.visible&&I.push(T,Ie,Oe,Q,Et.z,at)}}else Ee.visible&&I.push(T,Ie,Ee,Q,Et.z,null)}}const Ae=T.children;for(let Ie=0,Ee=Ae.length;Ie<Ee;Ie++)pn(Ae[Ie],W,Q,Y)}function Ci(T,W,Q,Y){const{opaque:$,transmissive:Ae,transparent:Ie}=T;C.setupLightsView(Q),Ze===!0&&ze.setGlobalState(G.clippingPlanes,Q),Y&&g.viewport(fe.copy(Y)),$.length>0&&Pi($,W,Q),Ae.length>0&&Pi(Ae,W,Q),Ie.length>0&&Pi(Ie,W,Q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function Rr(T,W,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[Y.id]===void 0){const Oe=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[Y.id]=new Bn(1,1,{generateMipmaps:!0,type:Oe?jn:dn,minFilter:Ti,samples:Math.max(4,P.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const Ae=C.state.transmissionRenderTarget[Y.id],Ie=Y.viewport||fe;Ae.setSize(Ie.z*G.transmissionResolutionScale,Ie.w*G.transmissionResolutionScale);const Ee=G.getRenderTarget(),Ve=G.getActiveCubeFace(),Xe=G.getActiveMipmapLevel();G.setRenderTarget(Ae),G.getClearColor(Me),He=G.getClearAlpha(),He<1&&G.setClearColor(16777215,.5),G.clear(),Mt&&Qe.render(Q);const rt=G.toneMapping;G.toneMapping=On;const at=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),C.setupLightsView(Y),Ze===!0&&ze.setGlobalState(G.clippingPlanes,Y),Pi(T,Q,Y),te.updateMultisampleRenderTarget(Ae),te.updateRenderTargetMipmap(Ae),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let pt=0,Lt=W.length;pt<Lt;pt++){const Rt=W[pt],{object:ht,geometry:Ft,material:Ue,group:rn}=Rt;if(Ue.side===Rn&&ht.layers.test(Y.layers)){const Ke=Ue.side;Ue.side=cn,Ue.needsUpdate=!0,Cr(ht,Q,Y,Ft,Ue,rn),Ue.side=Ke,Ue.needsUpdate=!0,Oe=!0}}Oe===!0&&(te.updateMultisampleRenderTarget(Ae),te.updateRenderTargetMipmap(Ae))}G.setRenderTarget(Ee,Ve,Xe),G.setClearColor(Me,He),at!==void 0&&(Y.viewport=at),G.toneMapping=rt}function Pi(T,W,Q){const Y=W.isScene===!0?W.overrideMaterial:null;for(let $=0,Ae=T.length;$<Ae;$++){const Ie=T[$],{object:Ee,geometry:Ve,group:Xe}=Ie;let rt=Ie.material;rt.allowOverride===!0&&Y!==null&&(rt=Y),Ee.layers.test(Q.layers)&&Cr(Ee,W,Q,Ve,rt,Xe)}}function Cr(T,W,Q,Y,$,Ae){T.onBeforeRender(G,W,Q,Y,$,Ae),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(G,W,Q,Y,T,Ae),$.transparent===!0&&$.side===Rn&&$.forceSinglePass===!1?($.side=cn,$.needsUpdate=!0,G.renderBufferDirect(Q,W,Y,$,T,Ae),$.side=pi,$.needsUpdate=!0,G.renderBufferDirect(Q,W,Y,$,T,Ae),$.side=Rn):G.renderBufferDirect(Q,W,Y,$,T,Ae),T.onAfterRender(G,W,Q,Y,$,Ae)}function Di(T,W,Q){W.isScene!==!0&&(W=St);const Y=H.get(T),$=C.state.lights,Ae=C.state.shadowsArray,Ie=$.state.version,Ee=Te.getParameters(T,$.state,Ae,W,Q,C.state.lightProbeGridArray),Ve=Te.getProgramCacheKey(Ee);let Xe=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?W.environment:null,Y.fog=W.fog;const rt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=xe.get(T.envMap||Y.environment,rt),Y.envMapRotation=Y.environment!==null&&T.envMap===null?W.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",kt),Xe=new Map,Y.programs=Xe);let at=Xe.get(Ve);if(at!==void 0){if(Y.currentProgram===at&&Y.lightsStateVersion===Ie)return Dr(T,Ee),at}else Ee.uniforms=Te.getUniforms(T),ee!==null&&T.isNodeMaterial&&ee.build(T,Q,Ee),T.onBeforeCompile(Ee,G),at=Te.acquireProgram(Ee,Ve),Xe.set(Ve,at),Y.uniforms=Ee.uniforms;const Oe=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=ze.uniform),Dr(T,Ee),Y.needsLights=Us(T),Y.lightsStateVersion=Ie,Y.needsLights&&(Oe.ambientLightColor.value=$.state.ambient,Oe.lightProbe.value=$.state.probe,Oe.directionalLights.value=$.state.directional,Oe.directionalLightShadows.value=$.state.directionalShadow,Oe.spotLights.value=$.state.spot,Oe.spotLightShadows.value=$.state.spotShadow,Oe.rectAreaLights.value=$.state.rectArea,Oe.ltc_1.value=$.state.rectAreaLTC1,Oe.ltc_2.value=$.state.rectAreaLTC2,Oe.pointLights.value=$.state.point,Oe.pointLightShadows.value=$.state.pointShadow,Oe.hemisphereLights.value=$.state.hemi,Oe.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Oe.spotLightMatrix.value=$.state.spotLightMatrix,Oe.spotLightMap.value=$.state.spotLightMap,Oe.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=C.state.lightProbeGridArray.length>0,Y.currentProgram=at,Y.uniformsList=null,at}function Pr(T){if(T.uniformsList===null){const W=T.currentProgram.getUniforms();T.uniformsList=ms.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Dr(T,W){const Q=H.get(T);Q.outputColorSpace=W.outputColorSpace,Q.batching=W.batching,Q.batchingColor=W.batchingColor,Q.instancing=W.instancing,Q.instancingColor=W.instancingColor,Q.instancingMorph=W.instancingMorph,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function Ds(T,W){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;w.setFromMatrixPosition(W.matrixWorld);for(let Q=0,Y=T.length;Q<Y;Q++){const $=T[Q];if($.texture!==null&&$.boundingBox.containsPoint(w))return $}return null}function Ls(T,W,Q,Y,$){W.isScene!==!0&&(W=St),te.resetTextureUnits();const Ae=W.fog,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?W.environment:null,Ee=re===null?G.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:_t.workingColorSpace,Ve=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Xe=xe.get(Y.envMap||Ie,Ve),rt=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,at=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Oe=!!Q.morphAttributes.position,pt=!!Q.morphAttributes.normal,Lt=!!Q.morphAttributes.color;let Rt=On;Y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Rt=G.toneMapping);const ht=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ft=ht!==void 0?ht.length:0,Ue=H.get(Y),rn=C.state.lights;if(Ze===!0&&(Ye===!0||T!==we)){const bt=T===we&&Y.id===ve;ze.setState(Y,T,bt)}let Ke=!1;Y.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==rn.state.version||Ue.outputColorSpace!==Ee||$.isBatchedMesh&&Ue.batching===!1||!$.isBatchedMesh&&Ue.batching===!0||$.isBatchedMesh&&Ue.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ue.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ue.instancing===!1||!$.isInstancedMesh&&Ue.instancing===!0||$.isSkinnedMesh&&Ue.skinning===!1||!$.isSkinnedMesh&&Ue.skinning===!0||$.isInstancedMesh&&Ue.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ue.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ue.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ue.instancingMorph===!1&&$.morphTexture!==null||Ue.envMap!==Xe||Y.fog===!0&&Ue.fog!==Ae||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ze.numPlanes||Ue.numIntersection!==ze.numIntersection)||Ue.vertexAlphas!==rt||Ue.vertexTangents!==at||Ue.morphTargets!==Oe||Ue.morphNormals!==pt||Ue.morphColors!==Lt||Ue.toneMapping!==Rt||Ue.morphTargetsCount!==Ft||!!Ue.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,Ue.__version=Y.version);let Jt=Ue.currentProgram;Ke===!0&&(Jt=Di(Y,W,$),ee&&Y.isNodeMaterial&&ee.onUpdateProgram(Y,Jt,Ue));let mn=!1,Pn=!1,ni=!1;const yt=Jt.getUniforms(),Ct=Ue.uniforms;if(g.useProgram(Jt.program)&&(mn=!0,Pn=!0,ni=!0),Y.id!==ve&&(ve=Y.id,Pn=!0),Ue.needsLights){const bt=Ds(C.state.lightProbeGridArray,$);Ue.lightProbeGrid!==bt&&(Ue.lightProbeGrid=bt,Pn=!0)}if(mn||we!==T){g.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),yt.setValue(V,"projectionMatrix",T.projectionMatrix),yt.setValue(V,"viewMatrix",T.matrixWorldInverse);const En=yt.map.cameraPosition;En!==void 0&&En.setValue(V,xt.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&yt.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&yt.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),we!==T&&(we=T,Pn=!0,ni=!0)}if(Ue.needsLights&&(rn.state.directionalShadowMap.length>0&&yt.setValue(V,"directionalShadowMap",rn.state.directionalShadowMap,te),rn.state.spotShadowMap.length>0&&yt.setValue(V,"spotShadowMap",rn.state.spotShadowMap,te),rn.state.pointShadowMap.length>0&&yt.setValue(V,"pointShadowMap",rn.state.pointShadowMap,te)),$.isSkinnedMesh){yt.setOptional(V,$,"bindMatrix"),yt.setOptional(V,$,"bindMatrixInverse");const bt=$.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),yt.setValue(V,"boneTexture",bt.boneTexture,te))}$.isBatchedMesh&&(yt.setOptional(V,$,"batchingTexture"),yt.setValue(V,"batchingTexture",$._matricesTexture,te),yt.setOptional(V,$,"batchingIdTexture"),yt.setValue(V,"batchingIdTexture",$._indirectTexture,te),yt.setOptional(V,$,"batchingColorTexture"),$._colorsTexture!==null&&yt.setValue(V,"batchingColorTexture",$._colorsTexture,te));const Sn=Q.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&B.update($,Q,Jt),(Pn||Ue.receiveShadow!==$.receiveShadow)&&(Ue.receiveShadow=$.receiveShadow,yt.setValue(V,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&W.environment!==null&&(Ct.envMapIntensity.value=W.environmentIntensity),Ct.dfgLUT!==void 0&&(Ct.dfgLUT.value=e0()),Pn){if(yt.setValue(V,"toneMappingExposure",G.toneMappingExposure),Ue.needsLights&&Is(Ct,ni),Ae&&Y.fog===!0&&Le.refreshFogUniforms(Ct,Ae),Le.refreshMaterialUniforms(Ct,Y,ue,me,C.state.transmissionRenderTarget[T.id]),Ue.needsLights&&Ue.lightProbeGrid){const bt=Ue.lightProbeGrid;Ct.probesSH.value=bt.texture,Ct.probesMin.value.copy(bt.boundingBox.min),Ct.probesMax.value.copy(bt.boundingBox.max),Ct.probesResolution.value.copy(bt.resolution)}ms.upload(V,Pr(Ue),Ct,te)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ms.upload(V,Pr(Ue),Ct,te),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&yt.setValue(V,"center",$.center),yt.setValue(V,"modelViewMatrix",$.modelViewMatrix),yt.setValue(V,"normalMatrix",$.normalMatrix),yt.setValue(V,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){const bt=Y.uniformsGroups;for(let En=0,ii=bt.length;En<ii;En++){const Lr=bt[En];oe.update(Lr,Jt),oe.bind(Lr,Jt)}}return Jt}function Is(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Us(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(T,W,Q){const Y=H.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),H.get(T.texture).__webglTexture=W,H.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,W){const Q=H.get(T);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,Q=0){re=T,le=W,X=Q;let Y=null,$=!1,Ae=!1;if(T){const Ee=H.get(T);if(Ee.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(V.FRAMEBUFFER,Ee.__webglFramebuffer),fe.copy(T.viewport),ge.copy(T.scissor),Ne=T.scissorTest,g.viewport(fe),g.scissor(ge),g.setScissorTest(Ne),ve=-1;return}else if(Ee.__webglFramebuffer===void 0)te.setupRenderTarget(T);else if(Ee.__hasExternalTextures)te.rebindTextures(T,H.get(T.texture).__webglTexture,H.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const rt=T.depthTexture;if(Ee.__boundDepthTexture!==rt){if(rt!==null&&H.has(rt)&&(T.width!==rt.image.width||T.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ae=!0);const Xe=H.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?Y=Xe[W][Q]:Y=Xe[W],$=!0):T.samples>0&&te.useMultisampledRTT(T)===!1?Y=H.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?Y=Xe[Q]:Y=Xe,fe.copy(T.viewport),ge.copy(T.scissor),Ne=T.scissorTest}else fe.copy(Ge).multiplyScalar(ue).floor(),ge.copy(ct).multiplyScalar(ue).floor(),Ne=We;if(Q!==0&&(Y=se),g.bindFramebuffer(V.FRAMEBUFFER,Y)&&g.drawBuffers(T,Y),g.viewport(fe),g.scissor(ge),g.setScissorTest(Ne),$){const Ee=H.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ee.__webglTexture,Q)}else if(Ae){const Ee=W;for(let Ve=0;Ve<T.textures.length;Ve++){const Xe=H.get(T.textures[Ve]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ve,Xe.__webglTexture,Q,Ee)}}else if(T!==null&&Q!==0){const Ee=H.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ee.__webglTexture,Q)}ve=-1},this.readRenderTargetPixels=function(T,W,Q,Y,$,Ae,Ie,Ee=0){if(!(T&&T.isWebGLRenderTarget)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve){g.bindFramebuffer(V.FRAMEBUFFER,Ve);try{const Xe=T.textures[Ee],rt=Xe.format,at=Xe.type;if(T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ee),!P.textureFormatReadable(rt)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(at)){vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-Y&&Q>=0&&Q<=T.height-$&&V.readPixels(W,Q,Y,$,he.convert(rt),he.convert(at),Ae)}finally{const Xe=re!==null?H.get(re).__webglFramebuffer:null;g.bindFramebuffer(V.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(T,W,Q,Y,$,Ae,Ie,Ee=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ve=Ve[Ie]),Ve)if(W>=0&&W<=T.width-Y&&Q>=0&&Q<=T.height-$){g.bindFramebuffer(V.FRAMEBUFFER,Ve);const Xe=T.textures[Ee],rt=Xe.format,at=Xe.type;if(T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ee),!P.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Oe),V.bufferData(V.PIXEL_PACK_BUFFER,Ae.byteLength,V.STREAM_READ),V.readPixels(W,Q,Y,$,he.convert(rt),he.convert(at),0);const pt=re!==null?H.get(re).__webglFramebuffer:null;g.bindFramebuffer(V.FRAMEBUFFER,pt);const Lt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Qh(V,Lt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Oe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ae),V.deleteBuffer(Oe),V.deleteSync(Lt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,W=null,Q=0){const Y=Math.pow(2,-Q),$=Math.floor(T.image.width*Y),Ae=Math.floor(T.image.height*Y),Ie=W!==null?W.x:0,Ee=W!==null?W.y:0;te.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,Q,0,0,Ie,Ee,$,Ae),g.unbindTexture()},this.copyTextureToTexture=function(T,W,Q=null,Y=null,$=0,Ae=0){let Ie,Ee,Ve,Xe,rt,at,Oe,pt,Lt;const Rt=T.isCompressedTexture?T.mipmaps[Ae]:T.image;if(Q!==null)Ie=Q.max.x-Q.min.x,Ee=Q.max.y-Q.min.y,Ve=Q.isBox3?Q.max.z-Q.min.z:1,Xe=Q.min.x,rt=Q.min.y,at=Q.isBox3?Q.min.z:0;else{const Ct=Math.pow(2,-$);Ie=Math.floor(Rt.width*Ct),Ee=Math.floor(Rt.height*Ct),T.isDataArrayTexture?Ve=Rt.depth:T.isData3DTexture?Ve=Math.floor(Rt.depth*Ct):Ve=1,Xe=0,rt=0,at=0}Y!==null?(Oe=Y.x,pt=Y.y,Lt=Y.z):(Oe=0,pt=0,Lt=0);const ht=he.convert(W.format),Ft=he.convert(W.type);let Ue;W.isData3DTexture?(te.setTexture3D(W,0),Ue=V.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(te.setTexture2DArray(W,0),Ue=V.TEXTURE_2D_ARRAY):(te.setTexture2D(W,0),Ue=V.TEXTURE_2D),g.activeTexture(V.TEXTURE0),g.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),g.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),g.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment);const rn=g.getParameter(V.UNPACK_ROW_LENGTH),Ke=g.getParameter(V.UNPACK_IMAGE_HEIGHT),Jt=g.getParameter(V.UNPACK_SKIP_PIXELS),mn=g.getParameter(V.UNPACK_SKIP_ROWS),Pn=g.getParameter(V.UNPACK_SKIP_IMAGES);g.pixelStorei(V.UNPACK_ROW_LENGTH,Rt.width),g.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Rt.height),g.pixelStorei(V.UNPACK_SKIP_PIXELS,Xe),g.pixelStorei(V.UNPACK_SKIP_ROWS,rt),g.pixelStorei(V.UNPACK_SKIP_IMAGES,at);const ni=T.isDataArrayTexture||T.isData3DTexture,yt=W.isDataArrayTexture||W.isData3DTexture;if(T.isDepthTexture){const Ct=H.get(T),Sn=H.get(W),bt=H.get(Ct.__renderTarget),En=H.get(Sn.__renderTarget);g.bindFramebuffer(V.READ_FRAMEBUFFER,bt.__webglFramebuffer),g.bindFramebuffer(V.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let ii=0;ii<Ve;ii++)ni&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,H.get(T).__webglTexture,$,at+ii),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,H.get(W).__webglTexture,Ae,Lt+ii)),V.blitFramebuffer(Xe,rt,Ie,Ee,Oe,pt,Ie,Ee,V.DEPTH_BUFFER_BIT,V.NEAREST);g.bindFramebuffer(V.READ_FRAMEBUFFER,null),g.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||H.has(T)){const Ct=H.get(T),Sn=H.get(W);g.bindFramebuffer(V.READ_FRAMEBUFFER,ae),g.bindFramebuffer(V.DRAW_FRAMEBUFFER,j);for(let bt=0;bt<Ve;bt++)ni?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ct.__webglTexture,$,at+bt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ct.__webglTexture,$),yt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Sn.__webglTexture,Ae,Lt+bt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Sn.__webglTexture,Ae),$!==0?V.blitFramebuffer(Xe,rt,Ie,Ee,Oe,pt,Ie,Ee,V.COLOR_BUFFER_BIT,V.NEAREST):yt?V.copyTexSubImage3D(Ue,Ae,Oe,pt,Lt+bt,Xe,rt,Ie,Ee):V.copyTexSubImage2D(Ue,Ae,Oe,pt,Xe,rt,Ie,Ee);g.bindFramebuffer(V.READ_FRAMEBUFFER,null),g.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else yt?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(Ue,Ae,Oe,pt,Lt,Ie,Ee,Ve,ht,Ft,Rt.data):W.isCompressedArrayTexture?V.compressedTexSubImage3D(Ue,Ae,Oe,pt,Lt,Ie,Ee,Ve,ht,Rt.data):V.texSubImage3D(Ue,Ae,Oe,pt,Lt,Ie,Ee,Ve,ht,Ft,Rt):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ae,Oe,pt,Ie,Ee,ht,Ft,Rt.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ae,Oe,pt,Rt.width,Rt.height,ht,Rt.data):V.texSubImage2D(V.TEXTURE_2D,Ae,Oe,pt,Ie,Ee,ht,Ft,Rt);g.pixelStorei(V.UNPACK_ROW_LENGTH,rn),g.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ke),g.pixelStorei(V.UNPACK_SKIP_PIXELS,Jt),g.pixelStorei(V.UNPACK_SKIP_ROWS,mn),g.pixelStorei(V.UNPACK_SKIP_IMAGES,Pn),Ae===0&&W.generateMipmaps&&V.generateMipmap(Ue),g.unbindTexture()},this.initRenderTarget=function(T){H.get(T).__webglFramebuffer===void 0&&te.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?te.setTextureCube(T,0):T.isData3DTexture?te.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?te.setTexture2DArray(T,0):te.setTexture2D(T,0),g.unbindTexture()},this.resetState=function(){le=0,X=0,re=null,g.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}const cc={type:"change"},Uo={type:"start"},$c={type:"end"},cs=new As,uc=new hi,n0=Math.cos(70*Ro.DEG2RAD),zt=new k,ln=2*Math.PI,wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ea=1e-6;class i0 extends sd{constructor(e,t=null){super(e,t),this.state=wt.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ji.ROTATE,MIDDLE:ji.DOLLY,RIGHT:ji.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new mi,this._lastTargetPosition=new k,this._quat=new mi().setFromUnitVectors(e.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ol,this._sphericalDelta=new Ol,this._scale=1,this._panOffset=new k,this._rotateStart=new nt,this._rotateEnd=new nt,this._rotateDelta=new nt,this._panStart=new nt,this._panEnd=new nt,this._panDelta=new nt,this._dollyStart=new nt,this._dollyEnd=new nt,this._dollyDelta=new nt,this._dollyDirection=new k,this._mouse=new nt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=s0.bind(this),this._onPointerDown=r0.bind(this),this._onPointerUp=a0.bind(this),this._onContextMenu=d0.bind(this),this._onMouseWheel=c0.bind(this),this._onKeyDown=u0.bind(this),this._onTouchStart=h0.bind(this),this._onTouchMove=f0.bind(this),this._onMouseDown=o0.bind(this),this._onMouseMove=l0.bind(this),this._interceptControlDown=p0.bind(this),this._interceptControlUp=m0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cc),this.update(),this.state=wt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=ln:n>Math.PI&&(n-=ln),r<-Math.PI?r+=ln:r>Math.PI&&(r-=ln),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const l=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=l!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let l=null;if(this.object.isPerspectiveCamera){const c=zt.length();l=this._clampDistance(c*this._scale);const f=c-l;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),a=!!f}else if(this.object.isOrthographicCamera){const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=f!==this.object.zoom;const h=new k(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(c),this.object.updateMatrixWorld(),l=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;l!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(l).add(this.object.position):(cs.origin.copy(this.object.position),cs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(cs.direction))<n0?this.object.lookAt(this.target):(uc.setFromNormalAndCoplanarPoint(this.object.up,this.target),cs.intersectPlane(uc,this.target))))}else if(this.object.isOrthographicCamera){const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),l!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Ea||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ea||this._lastTargetPosition.distanceToSquared(this.target)>Ea?(this.dispatchEvent(cc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;zt.copy(r).sub(this.target);let a=zt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,l=n.width,c=n.height;this._mouse.x=r/l*2-1,this._mouse.y=-(a/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const l=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(l,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new nt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function r0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function s0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function a0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($c),this.state=wt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function o0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ji.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=wt.DOLLY;break;case ji.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}break;case ji.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=wt.PAN}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Uo)}function l0(i){switch(this.state){case wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function c0(i){this.enabled===!1||this.enableZoom===!1||this.state!==wt.NONE||(i.preventDefault(),this.dispatchEvent(Uo),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($c))}function u0(i){this.enabled!==!1&&this._handleKeyDown(i)}function h0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=wt.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=wt.TOUCH_PAN;break;default:this.state=wt.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=wt.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=wt.TOUCH_DOLLY_ROTATE;break;default:this.state=wt.NONE}break;default:this.state=wt.NONE}this.state!==wt.NONE&&this.dispatchEvent(Uo)}function f0(i){switch(this._trackPointer(i),this.state){case wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=wt.NONE}}function d0(i){this.enabled!==!1&&i.preventDefault()}function p0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}let ya=null;function _0(){return ya||(ya=vh({locateFile:i=>new URL(i,document.baseURI).href})),ya}function g0(){const i=document.createElement("canvas");i.width=2,i.height=512;const e=i.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#fbfcfd"),t.addColorStop(.45,"#dfe5ec"),t.addColorStop(1,"#aeb8c4"),e.fillStyle=t,e.fillRect(0,0,2,512);const n=new Hf(i);return n.needsUpdate=!0,n}function v0(i,e){const t=a=>a[0][0]*(a[1][1]*a[2][2]-a[1][2]*a[2][1])-a[0][1]*(a[1][0]*a[2][2]-a[1][2]*a[2][0])+a[0][2]*(a[1][0]*a[2][1]-a[1][1]*a[2][0]),n=t(i);if(Math.abs(n)<1e-12)return null;const r=[];for(let a=0;a<3;a++){const l=i.map(c=>c.slice());for(let c=0;c<3;c++)l[c][a]=e[c];r.push(t(l)/n)}return r}function x0(i){const e=new k;for(let t=0;t<i.length;t++){const n=i[t],r=i[(t+1)%i.length];e.x+=(n.y-r.y)*(n.z+r.z),e.y+=(n.z-r.z)*(n.x+r.x),e.z+=(n.x-r.x)*(n.y+r.y)}return e.lengthSq()<1e-12?new k(0,0,1):e.normalize()}function hc(i){if(i.length<6)return null;const e=new k;i.forEach(C=>e.add(C)),e.multiplyScalar(1/i.length);const t=x0(i),n=Math.abs(t.z)<.9?new k(0,0,1):new k(1,0,0),r=new k().crossVectors(t,n).normalize(),a=new k().crossVectors(t,r).normalize(),l=i.map(C=>{const N=C.clone().sub(e);return{x:N.dot(r),y:N.dot(a)}});let c=0,f=0,h=0,_=0,v=0,p=0,M=0,b=0;const A=l.length;for(const C of l){const N=C.x*C.x+C.y*C.y;c+=C.x*C.x,f+=C.x*C.y,h+=C.y*C.y,_+=C.x,v+=C.y,p+=C.x*N,M+=C.y*N,b+=N}const x=v0([[c,f,_],[f,h,v],[_,v,A]],[-p,-M,-b]);if(!x)return null;const m=-x[0]/2,U=-x[1]/2,F=m*m+U*U-x[2];if(F<=0)return null;const w=Math.sqrt(F);let I=0;for(const C of l)I+=Math.abs(Math.hypot(C.x-m,C.y-U)-w);return I/=A,{center:e.clone().add(r.clone().multiplyScalar(m)).add(a.clone().multiplyScalar(U)),radius:w,normal:t,rms:I}}function go(i,e,t){const n=t.clone().sub(e),r=Ro.clamp(i.clone().sub(e).dot(n)/(n.lengthSq()||1),0,1),a=e.clone().add(n.multiplyScalar(r));return{d:i.distanceTo(a),c:a}}function M0(i,e){let t=1/0;for(let n=0;n<e.length-1;n++){const r=go(i,e[n],e[n+1]);r.d<t&&(t=r.d)}return t}function S0(i,e){let t=1/0,n=i[0],r=e[0];for(const a of i)for(let l=0;l<e.length-1;l++){const c=go(a,e[l],e[l+1]);c.d<t&&(t=c.d,n=a,r=c.c)}for(const a of e)for(let l=0;l<i.length-1;l++){const c=go(a,i[l],i[l+1]);c.d<t&&(t=c.d,r=a,n=c.c)}return{d:t,pa:n,pb:r}}function w0({url:i,file:e}){const t=Gt.useRef(null),n=Gt.useRef(null),r=Gt.useRef(null),a=Gt.useRef(null),l=Gt.useRef([]),c=Gt.useRef([]),[f,h]=Gt.useState(!1),[_,v]=Gt.useState("idle"),[p,M]=Gt.useState(""),[b,A]=Gt.useState(null),[x,m]=Gt.useState(!0),[U,F]=Gt.useState(null),[w,I]=Gt.useState(null),[C,N]=Gt.useState("");Gt.useEffect(()=>{a.current=b,l.current=[],c.current=[],D(),I(null),N("")},[b]),Gt.useEffect(()=>{r.current&&r.current.edgeLines.forEach(fe=>fe.visible=x)},[x]),Gt.useEffect(()=>{const fe=()=>h(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",fe),()=>document.removeEventListener("fullscreenchange",fe)},[]);const E=()=>{var ge,Ne;const fe=n.current;fe&&(document.fullscreenElement?(Ne=document.exitFullscreen)==null||Ne.call(document):(ge=fe.requestFullscreen)==null||ge.call(fe))};function D(){var ge,Ne,Me,He;const fe=r.current;if(fe)for(let K=fe.hlGroup.children.length-1;K>=0;K--){const me=fe.hlGroup.children[K];(Ne=(ge=me.geometry)==null?void 0:ge.dispose)==null||Ne.call(ge),(He=(Me=me.material)==null?void 0:Me.dispose)==null||He.call(Me),fe.hlGroup.remove(me)}}const G=(fe,ge)=>{const Ne=r.current,Me=new Uc(new on().setFromPoints(fe),new fo({color:ge,depthTest:!1,linewidth:2}));Me.renderOrder=998,Ne.hlGroup.add(Me)},z=(fe,ge)=>{const Ne=r.current,Me=new Mn(new Lo(Ne.maxDim*.012,12,12),new Ss({color:ge,depthTest:!1}));Me.position.copy(fe),Me.renderOrder=999,Ne.hlGroup.add(Me)},ee=(fe,ge,Ne,Me)=>{r.current;const He=Math.abs(Ne.z)<.9?new k(0,0,1):new k(1,0,0),K=new k().crossVectors(Ne,He).normalize(),me=new k().crossVectors(Ne,K).normalize(),ue=[];for(let Pe=0;Pe<=64;Pe++){const ke=Pe/64*Math.PI*2;ue.push(fe.clone().add(K.clone().multiplyScalar(Math.cos(ke)*ge)).add(me.clone().multiplyScalar(Math.sin(ke)*ge)))}G(ue,Me),z(fe,Me)},se=(fe,ge)=>{const Ne=r.current,Me=new on;Me.setAttribute("position",new qt(fe,3)),Me.computeVertexNormals();const He=new Mn(Me,new Ss({color:ge,transparent:!0,opacity:.4,side:Rn,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));He.renderOrder=997,Ne.hlGroup.add(He)},ae=fe=>{const ge=r.current,Ne=fe.clone().sub(ge.meshGroup.position);let Me=null,He=1/0;for(const ue of ge.edges){const Pe=M0(Ne,ue.pts);Pe<He&&(He=Pe,Me=ue)}if(!Me||He>ge.maxDim*.15){N("Kenara daha yakın tıkla.");return}if(l.current.length===1&&l.current[0]!==Me){l.current.push(Me),D();const[ue,Pe]=l.current;G(ue.pts,16756768),G(Pe.pts,4907519);const ke=S0(ue.pts,Pe.pts);G([ke.pa,ke.pb],16777215),z(ke.pa,16777215),z(ke.pb,16777215),I({kind:"edge-dist",value:ke.d}),N("İki kenar arası mesafe · yeni ölçüm için tekrar tıkla"),l.current=[],l.current._done=!0;return}l.current=[Me],D(),G(Me.pts,16756768);const K=Me.pts.length>=8?hc(Me.pts):null;!!K&&K.radius<ge.maxDim*5&&K.rms<K.radius*.06&&K?(ee(K.center,K.radius,K.normal,16766282),z(K.center,16766282),I({kind:"edge-dia",value:K.radius*2,circ:Me.length}),N("Dairesel kenar (Ø) · ikinci kenara tıkla = mesafe")):(I({kind:"edge-len",value:Me.length}),N("Kenar uzunluğu · ikinci kenara tıkla = mesafe"))},j=(fe,ge)=>{const Me=r.current.faceMeshes.find(We=>We.mesh===fe);if(!Me)return null;const He=Math.cos(Ro.degToRad(20)),K=new Set([ge]),me=[ge];for(;me.length;){const We=me.pop();for(const $e of Me.adj.get(We)||[])K.has($e)||Me.triNormal[We].dot(Me.triNormal[$e])>=He&&(K.add($e),me.push($e))}const ue=[],Pe=new k,ke=new k,Ge=Me.idx;let ct=0;for(const We of K){const $e=We*3,Ze=Ge[$e]*3,Ye=Ge[$e+1]*3,dt=Ge[$e+2]*3,xt=new k(Me.pos[Ze],Me.pos[Ze+1],Me.pos[Ze+2]),Et=new k(Me.pos[Ye],Me.pos[Ye+1],Me.pos[Ye+2]),St=new k(Me.pos[dt],Me.pos[dt+1],Me.pos[dt+2]);ue.push(xt.x,xt.y,xt.z,Et.x,Et.y,Et.z,St.x,St.y,St.z),Pe.add(xt).add(Et).add(St),ct+=3,ke.add(Me.triNormal[We])}return Pe.multiplyScalar(1/ct),ke.normalize(),{pos:ue,centroid:Pe,normal:ke}},le=(fe,ge)=>{const Ne=j(fe,ge);if(Ne)if(c.current.length===1){c.current.push(Ne),D();const[Me,He]=c.current;se(Me.pos,16756768),se(He.pos,4907519);let K,me,ue;if(Math.abs(Me.normal.dot(He.normal))>.9){const Pe=Me.centroid.clone().sub(He.centroid).dot(He.normal);me=Me.centroid.clone(),ue=Me.centroid.clone().sub(He.normal.clone().multiplyScalar(Pe)),K=Math.abs(Pe)}else{let Pe=1/0,ke=Me.centroid,Ge=He.centroid;const ct=Math.max(3,Math.floor(Me.pos.length/3/300)*3),We=Math.max(3,Math.floor(He.pos.length/3/300)*3);for(let $e=0;$e<Me.pos.length;$e+=ct){const Ze=new k(Me.pos[$e],Me.pos[$e+1],Me.pos[$e+2]);for(let Ye=0;Ye<He.pos.length;Ye+=We){const dt=new k(He.pos[Ye],He.pos[Ye+1],He.pos[Ye+2]),xt=Ze.distanceToSquared(dt);xt<Pe&&(Pe=xt,ke=Ze,Ge=dt)}}me=ke,ue=Ge,K=Math.sqrt(Pe)}G([me,ue],16777215),z(me,16777215),z(ue,16777215),I({kind:"face-dist",value:K}),N("İki yüzey arası mesafe · yeni ölçüm için tekrar tıkla"),c.current=[]}else c.current=[Ne],D(),se(Ne.pos,16756768),I(null),N("İkinci yüzeyi seç")},X=()=>{l.current=[],c.current=[],D(),I(null),N("")};Gt.useEffect(()=>{let fe=!1,ge=0,Ne=null,Me={x:0,y:0};async function He(){var me;if(!e&&!i){v("empty");return}const K=t.current;if(K){v("loading"),M(""),F(null),I(null),N(""),l.current=[];try{let ue;if(e)ue=await e.arrayBuffer();else{const ne=await fetch(i);if(!ne.ok){v("empty");return}ue=await ne.arrayBuffer()}const Pe=await _0();if(fe)return;const ke=Pe.ReadStepFile(new Uint8Array(ue),null);if(fe)return;if(!ke||!ke.success||!((me=ke.meshes)!=null&&me.length)){v("error"),M("STEP çözümlenemedi.");return}const Ge=K.clientWidth||400,ct=K.clientHeight||400,We=new Df;We.background=g0();const $e=new vn(45,Ge/ct,.1,1e6),Ze=new t0({antialias:!0});Ze.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ze.setSize(Ge,ct),K.innerHTML="",K.appendChild(Ze.domElement);const Ye=new Ji,dt=[],xt=[],Et=[];for(const ne of ke.meshes){const J=new on;J.setAttribute("position",new qt(ne.attributes.position.array,3)),ne.attributes.normal&&J.setAttribute("normal",new qt(ne.attributes.normal.array,3)),ne.index&&J.setIndex(ne.index.array),ne.attributes.normal||J.computeVertexNormals();const he=ne.color?new ft(ne.color[0],ne.color[1],ne.color[2]):new ft(9607585),pe=new Mn(J,new Zf({color:he,metalness:.18,roughness:.5,side:Rn,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}));Ye.add(pe);const oe=new Wf(J,22),de=new Vf(oe,new fo({color:2106411}));dt.push(de),Ye.add(de);const Re=oe.getAttribute("position");for(let S=0;S<Re.count;S+=2)Et.push([new k().fromBufferAttribute(Re,S),new k().fromBufferAttribute(Re,S+1)]);const je=J.getAttribute("position").array,et=ne.index?Array.from(ne.index.array):Array.from({length:je.length/3},(S,un)=>un),Nt=[],kt=et.length/3,Hn=1,vi=new Map;for(let S=0;S<kt;S++){const un=S*3,ut=et[un]*3,ei=et[un+1]*3,ti=et[un+2]*3,nn=new k(je[ut],je[ut+1],je[ut+2]),pn=new k(je[ei],je[ei+1],je[ei+2]),Ci=new k(je[ti],je[ti+1],je[ti+2]);Nt.push(pn.clone().sub(nn).cross(Ci.clone().sub(nn)).normalize())}xt.push({mesh:pe,pos:je,idx:et,triNormal:Nt,adj:new Map,_edgeMap:vi,_q:Hn})}We.add(Ye);const St=new lr().setFromObject(Ye),Mt=St.getSize(new k),At=St.getCenter(new k);Ye.position.sub(At);const V=Math.max(Mt.x,Mt.y,Mt.z)||1;F({x:Mt.x,y:Mt.y,z:Mt.z});const Pt=V*5e-4,mt=ne=>`${Math.round(ne.x/Pt)},${Math.round(ne.y/Pt)},${Math.round(ne.z/Pt)}`,P=new Map,g=new Map,q=new Set;for(const[ne,J]of Et){const he=mt(ne),pe=mt(J);if(he===pe)continue;P.has(he)||P.set(he,ne),P.has(pe)||P.set(pe,J);const oe=he<pe?he+"|"+pe:pe+"|"+he;q.has(oe)||(q.add(oe),(g.get(he)||g.set(he,[]).get(he)).push(pe),(g.get(pe)||g.set(pe,[]).get(pe)).push(he))}const H=new Set,te=[],xe=(ne,J)=>{const he=[P.get(ne)];let pe=ne,oe=J;for(;;){const de=pe<oe?pe+"|"+oe:oe+"|"+pe;if(H.has(de))break;H.add(de),he.push(P.get(oe));const Re=(g.get(oe)||[]).filter(et=>et!==pe);if((g.get(oe)||[]).length!==2)break;const je=Re[0];if(je===void 0||(pe=oe,oe=je,oe===ne))break}return he},ye=ne=>{if(ne.length<2)return;let J=0;for(let oe=0;oe<ne.length-1;oe++)J+=ne[oe].distanceTo(ne[oe+1]);const he=ne[0].distanceTo(ne[ne.length-1])<Pt*2,pe=he?hc(ne):null;te.push({pts:ne,length:J,closed:he,circle:pe})};for(const[ne,J]of g)if(J.length!==2)for(const he of J){const pe=ne<he?ne+"|"+he:he+"|"+ne;H.has(pe)||ye(xe(ne,he))}for(const[ne,J]of g)for(const he of J){const pe=ne<he?ne+"|"+he:he+"|"+ne;H.has(pe)||ye(xe(ne,he))}for(const ne of xt){const J=new Map,he=ne.idx,pe=ne.pos,oe=he.length/3,de=je=>{const et=je*3;return`${Math.round(pe[et]/Pt)},${Math.round(pe[et+1]/Pt)},${Math.round(pe[et+2]/Pt)}`};for(let je=0;je<oe;je++){const et=je*3,Nt=[de(he[et]),de(he[et+1]),de(he[et+2])];for(let kt=0;kt<3;kt++){const Hn=[Nt[kt],Nt[(kt+1)%3]].sort().join("#");(J.get(Hn)||J.set(Hn,[]).get(Hn)).push(je)}}const Re=new Map;for(const je of J.values())if(je.length>1)for(const et of je)for(const Nt of je)Nt!==et&&(Re.get(et)||Re.set(et,[]).get(et)).push(Nt);ne.adj=Re}const Z=new Ji;Z.position.copy(Ye.position),We.add(Z);const ce=V*2.2;$e.position.set(ce*.75,ce*.55,ce),$e.near=V/200,$e.far=V*200,$e.updateProjectionMatrix(),$e.lookAt(0,0,0),We.add(new Qf(16777215,10134189,.95));const Te=new Ul(16777215,.55);Te.position.set(1,1.5,1),We.add(Te);const Le=new Ul(16777215,.3);Le.position.set(-1,.4,-.8),We.add(Le);const be=new i0($e,Ze.domElement);be.enableDamping=!0,be.dampingFactor=.08,be.target.set(0,0,0);const Se=new rd;r.current={renderer:Ze,camera:$e,scene:We,controls:be,meshGroup:Ye,hlGroup:Z,edgeLines:dt,raycaster:Se,maxDim:V,edges:te,faceMeshes:xt};const ze=Ze.domElement,qe=ne=>{Me={x:ne.clientX,y:ne.clientY}},Qe=ne=>{const J=a.current;if(!J||Math.hypot(ne.clientX-Me.x,ne.clientY-Me.y)>5)return;const he=ze.getBoundingClientRect(),pe=new nt((ne.clientX-he.left)/he.width*2-1,-((ne.clientY-he.top)/he.height)*2+1);Se.setFromCamera(pe,$e);const oe=Se.intersectObjects(Ye.children.filter(Re=>Re.isMesh),!0);if(!oe.length){N("Model üzerine tıkla.");return}const de=oe[0];J==="edge"?ae(de.point.clone()):J==="face"&&de.faceIndex!=null&&le(de.object,de.faceIndex)};ze.addEventListener("pointerdown",qe),ze.addEventListener("pointerup",Qe);const B=()=>{ge=requestAnimationFrame(B),be.update(),Ze.render(We,$e)};B(),Ne=new ResizeObserver(()=>{const ne=K.clientWidth,J=K.clientHeight;ne&&J&&($e.aspect=ne/J,$e.updateProjectionMatrix(),Ze.setSize(ne,J))}),Ne.observe(K),v("ready"),r.current._cleanup=()=>{ze.removeEventListener("pointerdown",qe),ze.removeEventListener("pointerup",Qe)}}catch(ue){fe||(v("error"),M((ue==null?void 0:ue.message)||"Görüntüleyici hatası."))}}}return He(),()=>{var me,ue,Pe;fe=!0,ge&&cancelAnimationFrame(ge),Ne&&Ne.disconnect();const K=r.current;K&&((me=K._cleanup)==null||me.call(K),K.controls.dispose(),K.renderer.dispose(),(Pe=(ue=K.renderer).forceContextLoss)==null||Pe.call(ue),K.renderer.domElement.remove()),r.current=null}},[i,e]);const re=(fe,ge,Ne)=>Ot.jsx("button",{onClick:()=>A(Me=>Me===fe?null:fe),className:"font-mono px-2.5 py-1 rounded-lg",style:{fontSize:11,fontWeight:700,background:b===fe?`${Ne}33`:"rgba(0,0,0,0.45)",color:b===fe?Ne:"#e5e5e5",border:`1px solid ${b===fe?Ne+"99":"rgba(255,255,255,0.15)"}`},children:ge}),ve=w?w.kind==="edge-dia"?`Ø ${w.value.toFixed(2)} mm`:w.kind==="edge-len"?`Uzunluk: ${w.value.toFixed(2)} mm`:w.kind==="edge-dist"?`Mesafe: ${w.value.toFixed(2)} mm`:`Yüzey arası: ${w.value.toFixed(2)} mm`:null,we=(w==null?void 0:w.kind)==="edge-dia"?"#ffd54a":(w==null?void 0:w.kind)==="edge-dist"||(w==null?void 0:w.kind)==="face-dist"?"#ffffff":"#ffb020";return Ot.jsxs("div",{ref:n,className:"relative w-full h-full",style:{background:"#c3ccd6",minHeight:240},children:[Ot.jsx("div",{ref:t,className:"w-full h-full",style:{minHeight:240}}),_==="ready"&&Ot.jsxs(Ot.Fragment,{children:[Ot.jsxs("div",{className:"absolute top-2 right-2 flex flex-col gap-1.5 items-end",children:[Ot.jsxs("div",{className:"flex gap-1.5 flex-wrap justify-end",children:[re("edge","📐 Kenar","#ffb020"),re("face","▧ Yüzey","#4ae1ff"),Ot.jsx("button",{onClick:()=>m(fe=>!fe),className:"font-mono px-2.5 py-1 rounded-lg",style:{fontSize:11,fontWeight:700,background:x?"rgba(96,165,250,0.22)":"rgba(0,0,0,0.45)",color:x?"#3b82f6":"#333",border:`1px solid ${x?"rgba(59,130,246,0.6)":"rgba(0,0,0,0.2)"}`},children:"Kenarlar"}),w&&Ot.jsx("button",{onClick:X,className:"font-mono px-2.5 py-1 rounded-lg",style:{fontSize:11,fontWeight:700,background:"rgba(0,0,0,0.45)",color:"#f28b8b",border:"1px solid rgba(242,139,139,0.4)"},children:"Temizle"}),Ot.jsx("button",{onClick:E,title:f?"Küçült":"Tam ekran",className:"font-mono px-2.5 py-1 rounded-lg",style:{fontSize:11,fontWeight:700,background:"rgba(0,0,0,0.55)",color:"#fff",border:"1px solid rgba(255,255,255,0.2)"},children:f?"🗕 Küçült":"⛶ Tam Ekran"})]}),b&&!w&&Ot.jsx("div",{className:"font-mono px-2 py-1 rounded",style:{fontSize:10,color:"#fff",background:"rgba(0,0,0,0.6)"},children:b==="edge"?"Bir kenara tıkla (dairesel = çap)":"Bir yüzeye tıkla"}),ve&&Ot.jsx("div",{className:"font-mono px-2.5 py-1 rounded-lg",style:{fontSize:14,fontWeight:800,color:we==="#ffffff"?"#111":we,background:we==="#ffffff"?"rgba(255,255,255,0.92)":"rgba(0,0,0,0.62)",border:`1px solid ${we}aa`},children:ve}),(w==null?void 0:w.kind)==="edge-dia"&&Ot.jsxs("div",{className:"font-mono px-2 py-0.5 rounded",style:{fontSize:10,color:"#eee",background:"rgba(0,0,0,0.5)"},children:["Çevre: ",w.circ.toFixed(1)," mm"]}),C&&Ot.jsx("div",{className:"font-mono px-2 py-0.5 rounded text-right",style:{fontSize:10,color:"#eee",background:"rgba(0,0,0,0.45)",maxWidth:200},children:C})]}),U&&Ot.jsxs("div",{className:"absolute top-2 left-2 font-mono rounded-lg",style:{padding:"9px 15px",color:"#1b2430",background:"rgba(255,255,255,0.72)",border:"1px solid rgba(0,0,0,0.12)"},children:[Ot.jsx("div",{style:{color:"#5a6472",fontSize:12,letterSpacing:"0.08em"},children:"GABARİ (mm)"}),Ot.jsxs("div",{style:{fontWeight:700,fontSize:15},children:[U.x.toFixed(1)," × ",U.y.toFixed(1)," × ",U.z.toFixed(1)]})]}),Ot.jsx("div",{className:"absolute bottom-2 left-2 font-mono px-2 py-0.5 rounded pointer-events-none",style:{fontSize:10,color:"#33404d",background:"rgba(255,255,255,0.55)"},children:"Sürükle: döndür · tekerlek: yakınlaştır · sağ tık: kaydır"})]}),_!=="ready"&&Ot.jsx("div",{className:"absolute inset-0 flex items-center justify-center px-4 text-center pointer-events-none",children:Ot.jsx("span",{className:"font-mono text-xs",style:{color:"#5a6472"},children:_==="loading"?"3B model yükleniyor…":_==="empty"?"Bu parçaya henüz STEP eklenmedi.":_==="error"?"Gösterilemedi: "+p:""})})]})}export{w0 as S,vh as o};
