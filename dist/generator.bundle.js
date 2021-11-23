(()=>{"use strict";const e="function"==typeof btoa,t="function"==typeof Buffer,n=("function"==typeof TextDecoder&&new TextDecoder,"function"==typeof TextEncoder?new TextEncoder:void 0),r=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),o=((e=>{let t={};e.forEach(((e,n)=>t[e]=n))})(r),String.fromCharCode.bind(String)),a=("function"==typeof Uint8Array.from&&Uint8Array.from.bind(Uint8Array),e=>e.replace(/=/g,"").replace(/[+\/]/g,(e=>"+"==e?"-":"_"))),c=e?e=>btoa(e):t?e=>Buffer.from(e,"binary").toString("base64"):e=>{let t,n,o,a,c="";const l=e.length%3;for(let l=0;l<e.length;){if((n=e.charCodeAt(l++))>255||(o=e.charCodeAt(l++))>255||(a=e.charCodeAt(l++))>255)throw new TypeError("invalid character found");t=n<<16|o<<8|a,c+=r[t>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t]}return l?c.slice(0,l-3)+"===".substring(l):c},l=t?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let n=0,r=e.length;n<r;n+=4096)t.push(o.apply(null,e.subarray(n,n+4096)));return c(t.join(""))},i=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?o(192|t>>>6)+o(128|63&t):o(224|t>>>12&15)+o(128|t>>>6&63)+o(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return o(240|t>>>18&7)+o(128|t>>>12&63)+o(128|t>>>6&63)+o(128|63&t)},d=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,u=t?e=>Buffer.from(e,"utf8").toString("base64"):n?e=>l(n.encode(e)):e=>c(e.replace(d,i)),s=(e,t=!1)=>t?a(u(e)):u(e);console.log("Hello!");const p=document.getElementById("name-list"),m=document.getElementById("submit"),f=document.getElementById("log"),h=document.getElementById("table"),g=document.getElementById("special-rules"),y=document.getElementById("show-recipients"),E=window.location.href.replace("/generator.html","");let v,C=(...e)=>{console.error(...e);let t=document.createElement("p");t.style.color="red",t.innerText=e.join(", "),f.prepend(t)},b=()=>{let e=document.querySelector('input[name="sep"]:checked').value,t=p.value;if(""==p.value)return void C("Must have at least 2 names");if(t="newline"===e?p.value.split("\n"):p.value.split(","),t.length<2)return void C("Must have at least 2 names");t=t.map((e=>e.trim()));const n=A(t).map((e=>{const t={recipient:e[1],specialRules:""==g.value?null:g.value},n=`${E}?santa=${encodeURIComponent(e[0])}&data=${encodeURIComponent(s(JSON.stringify(t)))}`,r=document.createElement("span");return r.onclick=()=>{navigator.clipboard.writeText(n)},r.innerHTML=n,[e[0],r,e[1]]})),r="output";((e,t,n,r=function(){return([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))}())=>{e.innerHTML="";const o=document.createElement("tr");t.forEach(((e,t)=>{const n=document.createElement("th");n.innerHTML=e,o.appendChild(n)})),e.appendChild(o),n.forEach((t=>{const n=document.createElement("tr");t.forEach(((e,t)=>{const o=document.createElement("td");o.classList.add(`${r}-item-${t}`),"object"==typeof e?o.appendChild(e):o.innerHTML=e,n.appendChild(o)})),e.appendChild(n)}))})(h,["Santa","Santa's Link (click to copy)","Recipient"],n,r),v&&y.removeEventListener("change",v),v=()=>{document.querySelectorAll(`.${r}-item-2`).forEach((e=>{e.style.display=y.checked?null:"none"}))},v(),y.addEventListener("change",v)},A=e=>{let t=e.map((e=>({value:e,sort:Math.random()}))).sort(((e,t)=>e.sort-t.sort)).map((({value:e})=>e));return t.map(((e,n)=>t[n+1]?[e,t[n+1]]:[e,t[0]]))};m.addEventListener("click",(()=>{b()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQixTQUFVcEQsSUFhMUNtQixFQUFpQmtDLElBQ2pCLElBQUlDLEVBQW1CRCxFQU5sQnRDLEtBQUtILElBQVUsQ0FBR0EsTUFBQUEsRUFBTzJDLEtBQU1DLEtBQUtDLGFBQ3BDRixNQUFLLENBQUMvRyxFQUFHa0gsSUFBTWxILEVBQUUrRyxLQUFPRyxFQUFFSCxPQUMxQnhDLEtBQUksRUFBR0gsTUFBQUEsS0FBWUEsSUFZeEIsT0FQWTBDLEVBQVN2QyxLQUFJLENBQUNILEVBQU80QixJQUN6QmMsRUFBU2QsRUFBTSxHQUdaLENBQUM1QixFQUFPMEMsRUFBU2QsRUFBTSxJQUZuQixDQUFDNUIsRUFBTzBDLEVBQVMsT0FXcEM5RCxFQUFlNEQsaUJBQWlCLFNBQVMsS0FFckMzQyxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VjcmV0LXNhbnRhLy4vc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly9zZWNyZXQtc2FudGEvLi9ub2RlX21vZHVsZXMvanMtYmFzZTY0L2Jhc2U2NC5tanMiLCJ3ZWJwYWNrOi8vc2VjcmV0LXNhbnRhLy4vc3JjL2dlbmVyYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgY29uc3QgQmFzZTY0PXtfa2V5U3RyOlwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixlbmNvZGU6ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjt2YXIgbixyLGkscyxvLHUsYTt2YXIgZj0wO2U9QmFzZTY0Ll91dGY4X2VuY29kZShlKTt3aGlsZShmPGUubGVuZ3RoKXtuPWUuY2hhckNvZGVBdChmKyspO3I9ZS5jaGFyQ29kZUF0KGYrKyk7aT1lLmNoYXJDb2RlQXQoZisrKTtzPW4+PjI7bz0obiYzKTw8NHxyPj40O3U9KHImMTUpPDwyfGk+PjY7YT1pJjYzO2lmKGlzTmFOKHIpKXt1PWE9NjR9ZWxzZSBpZihpc05hTihpKSl7YT02NH10PXQrdGhpcy5fa2V5U3RyLmNoYXJBdChzKSt0aGlzLl9rZXlTdHIuY2hhckF0KG8pK3RoaXMuX2tleVN0ci5jaGFyQXQodSkrdGhpcy5fa2V5U3RyLmNoYXJBdChhKX1yZXR1cm4gdH0sZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG4scixpO3ZhciBzLG8sdSxhO3ZhciBmPTA7ZT1lLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXFw9XS9nLFwiXCIpO3doaWxlKGY8ZS5sZW5ndGgpe3M9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bz10aGlzLl9rZXlTdHIuaW5kZXhPZihlLmNoYXJBdChmKyspKTt1PXRoaXMuX2tleVN0ci5pbmRleE9mKGUuY2hhckF0KGYrKykpO2E9dGhpcy5fa2V5U3RyLmluZGV4T2YoZS5jaGFyQXQoZisrKSk7bj1zPDwyfG8+PjQ7cj0obyYxNSk8PDR8dT4+MjtpPSh1JjMpPDw2fGE7dD10K1N0cmluZy5mcm9tQ2hhckNvZGUobik7aWYodSE9NjQpe3Q9dCtTdHJpbmcuZnJvbUNoYXJDb2RlKHIpfWlmKGEhPTY0KXt0PXQrU3RyaW5nLmZyb21DaGFyQ29kZShpKX19dD1CYXNlNjQuX3V0ZjhfZGVjb2RlKHQpO3JldHVybiB0fSxfdXRmOF9lbmNvZGU6ZnVuY3Rpb24oZSl7ZT1lLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpO3ZhciB0PVwiXCI7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWUuY2hhckNvZGVBdChuKTtpZihyPDEyOCl7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyKX1lbHNlIGlmKHI+MTI3JiZyPDIwNDgpe3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NnwxOTIpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfWVsc2V7dCs9U3RyaW5nLmZyb21DaGFyQ29kZShyPj4xMnwyMjQpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUocj4+NiY2M3wxMjgpO3QrPVN0cmluZy5mcm9tQ2hhckNvZGUociY2M3wxMjgpfX1yZXR1cm4gdH0sX3V0ZjhfZGVjb2RlOmZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7dmFyIG49MDt2YXIgcj1jMT1jMj0wO3doaWxlKG48ZS5sZW5ndGgpe3I9ZS5jaGFyQ29kZUF0KG4pO2lmKHI8MTI4KXt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpO24rK31lbHNlIGlmKHI+MTkxJiZyPDIyNCl7YzI9ZS5jaGFyQ29kZUF0KG4rMSk7dCs9U3RyaW5nLmZyb21DaGFyQ29kZSgociYzMSk8PDZ8YzImNjMpO24rPTJ9ZWxzZXtjMj1lLmNoYXJDb2RlQXQobisxKTtjMz1lLmNoYXJDb2RlQXQobisyKTt0Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKChyJjE1KTw8MTJ8KGMyJjYzKTw8NnxjMyY2Myk7bis9M319cmV0dXJuIHR9fVxuZXhwb3J0IGZ1bmN0aW9uIHV1aWR2NCgpIHtcbiAgICByZXR1cm4gKFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XG4gICAgICAoYyBeIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgMTUgPj4gYyAvIDQpLnRvU3RyaW5nKDE2KVxuICAgICk7XG4gIH1cblxuZXhwb3J0IGRlZmF1bHQge3V1aWR2NDogdXVpZHY0fSIsIi8qKlxuICogIGJhc2U2NC50c1xuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQlNEIDMtQ2xhdXNlIExpY2Vuc2UuXG4gKiAgICBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKlxuICogIFJlZmVyZW5jZXM6XG4gKiAgICBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NFxuICpcbiAqIEBhdXRob3IgRGFuIEtvZ2FpIChodHRwczovL2dpdGh1Yi5jb20vZGFua29nYWkpXG4gKi9cbmNvbnN0IHZlcnNpb24gPSAnMy43LjInO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgbG93ZXJjYXNlIGB2ZXJzaW9uYC5cbiAqL1xuY29uc3QgVkVSU0lPTiA9IHZlcnNpb247XG5jb25zdCBfaGFzYXRvYiA9IHR5cGVvZiBhdG9iID09PSAnZnVuY3Rpb24nO1xuY29uc3QgX2hhc2J0b2EgPSB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJztcbmNvbnN0IF9oYXNCdWZmZXIgPSB0eXBlb2YgQnVmZmVyID09PSAnZnVuY3Rpb24nO1xuY29uc3QgX1REID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAnZnVuY3Rpb24nID8gbmV3IFRleHREZWNvZGVyKCkgOiB1bmRlZmluZWQ7XG5jb25zdCBfVEUgPSB0eXBlb2YgVGV4dEVuY29kZXIgPT09ICdmdW5jdGlvbicgPyBuZXcgVGV4dEVuY29kZXIoKSA6IHVuZGVmaW5lZDtcbmNvbnN0IGI2NGNoID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89JztcbmNvbnN0IGI2NGNocyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGI2NGNoKTtcbmNvbnN0IGI2NHRhYiA9ICgoYSkgPT4ge1xuICAgIGxldCB0YWIgPSB7fTtcbiAgICBhLmZvckVhY2goKGMsIGkpID0+IHRhYltjXSA9IGkpO1xuICAgIHJldHVybiB0YWI7XG59KShiNjRjaHMpO1xuY29uc3QgYjY0cmUgPSAvXig/OltBLVphLXpcXGQrXFwvXXs0fSkqPyg/OltBLVphLXpcXGQrXFwvXXsyfSg/Oj09KT98W0EtWmEtelxcZCtcXC9dezN9PT8pPyQvO1xuY29uc3QgX2Zyb21DQyA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYmluZChTdHJpbmcpO1xuY29uc3QgX1U4QWZyb20gPSB0eXBlb2YgVWludDhBcnJheS5mcm9tID09PSAnZnVuY3Rpb24nXG4gICAgPyBVaW50OEFycmF5LmZyb20uYmluZChVaW50OEFycmF5KVxuICAgIDogKGl0LCBmbiA9ICh4KSA9PiB4KSA9PiBuZXcgVWludDhBcnJheShBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpdCwgMCkubWFwKGZuKSk7XG5jb25zdCBfbWtVcmlTYWZlID0gKHNyYykgPT4gc3JjXG4gICAgLnJlcGxhY2UoLz0vZywgJycpLnJlcGxhY2UoL1srXFwvXS9nLCAobTApID0+IG0wID09ICcrJyA/ICctJyA6ICdfJyk7XG5jb25zdCBfdGlkeUI2NCA9IChzKSA9PiBzLnJlcGxhY2UoL1teQS1aYS16MC05XFwrXFwvXS9nLCAnJyk7XG4vKipcbiAqIHBvbHlmaWxsIHZlcnNpb24gb2YgYGJ0b2FgXG4gKi9cbmNvbnN0IGJ0b2FQb2x5ZmlsbCA9IChiaW4pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygncG9seWZpbGxlZCcpO1xuICAgIGxldCB1MzIsIGMwLCBjMSwgYzIsIGFzYyA9ICcnO1xuICAgIGNvbnN0IHBhZCA9IGJpbi5sZW5ndGggJSAzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmluLmxlbmd0aDspIHtcbiAgICAgICAgaWYgKChjMCA9IGJpbi5jaGFyQ29kZUF0KGkrKykpID4gMjU1IHx8XG4gICAgICAgICAgICAoYzEgPSBiaW4uY2hhckNvZGVBdChpKyspKSA+IDI1NSB8fFxuICAgICAgICAgICAgKGMyID0gYmluLmNoYXJDb2RlQXQoaSsrKSkgPiAyNTUpXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdpbnZhbGlkIGNoYXJhY3RlciBmb3VuZCcpO1xuICAgICAgICB1MzIgPSAoYzAgPDwgMTYpIHwgKGMxIDw8IDgpIHwgYzI7XG4gICAgICAgIGFzYyArPSBiNjRjaHNbdTMyID4+IDE4ICYgNjNdXG4gICAgICAgICAgICArIGI2NGNoc1t1MzIgPj4gMTIgJiA2M11cbiAgICAgICAgICAgICsgYjY0Y2hzW3UzMiA+PiA2ICYgNjNdXG4gICAgICAgICAgICArIGI2NGNoc1t1MzIgJiA2M107XG4gICAgfVxuICAgIHJldHVybiBwYWQgPyBhc2Muc2xpY2UoMCwgcGFkIC0gMykgKyBcIj09PVwiLnN1YnN0cmluZyhwYWQpIDogYXNjO1xufTtcbi8qKlxuICogZG9lcyB3aGF0IGB3aW5kb3cuYnRvYWAgb2Ygd2ViIGJyb3dzZXJzIGRvLlxuICogQHBhcmFtIHtTdHJpbmd9IGJpbiBiaW5hcnkgc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBCYXNlNjQtZW5jb2RlZCBzdHJpbmdcbiAqL1xuY29uc3QgX2J0b2EgPSBfaGFzYnRvYSA/IChiaW4pID0+IGJ0b2EoYmluKVxuICAgIDogX2hhc0J1ZmZlciA/IChiaW4pID0+IEJ1ZmZlci5mcm9tKGJpbiwgJ2JpbmFyeScpLnRvU3RyaW5nKCdiYXNlNjQnKVxuICAgICAgICA6IGJ0b2FQb2x5ZmlsbDtcbmNvbnN0IF9mcm9tVWludDhBcnJheSA9IF9oYXNCdWZmZXJcbiAgICA/ICh1OGEpID0+IEJ1ZmZlci5mcm9tKHU4YSkudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgOiAodThhKSA9PiB7XG4gICAgICAgIC8vIGNmLiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMjcxMDAwMS9ob3ctdG8tY29udmVydC11aW50OC1hcnJheS10by1iYXNlNjQtZW5jb2RlZC1zdHJpbmcvMTI3MTMzMjYjMTI3MTMzMjZcbiAgICAgICAgY29uc3QgbWF4YXJncyA9IDB4MTAwMDtcbiAgICAgICAgbGV0IHN0cnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB1OGEubGVuZ3RoOyBpIDwgbDsgaSArPSBtYXhhcmdzKSB7XG4gICAgICAgICAgICBzdHJzLnB1c2goX2Zyb21DQy5hcHBseShudWxsLCB1OGEuc3ViYXJyYXkoaSwgaSArIG1heGFyZ3MpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9idG9hKHN0cnMuam9pbignJykpO1xuICAgIH07XG4vKipcbiAqIGNvbnZlcnRzIGEgVWludDhBcnJheSB0byBhIEJhc2U2NCBzdHJpbmcuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt1cmxzYWZlXSBVUkwtYW5kLWZpbGVuYW1lLXNhZmUgYSBsYSBSRkM0NjQ4IMKnNVxuICogQHJldHVybnMge3N0cmluZ30gQmFzZTY0IHN0cmluZ1xuICovXG5jb25zdCBmcm9tVWludDhBcnJheSA9ICh1OGEsIHVybHNhZmUgPSBmYWxzZSkgPT4gdXJsc2FmZSA/IF9ta1VyaVNhZmUoX2Zyb21VaW50OEFycmF5KHU4YSkpIDogX2Zyb21VaW50OEFycmF5KHU4YSk7XG4vLyBUaGlzIHRyaWNrIGlzIGZvdW5kIGJyb2tlbiBodHRwczovL2dpdGh1Yi5jb20vZGFua29nYWkvanMtYmFzZTY0L2lzc3Vlcy8xMzBcbi8vIGNvbnN0IHV0b2IgPSAoc3JjOiBzdHJpbmcpID0+IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzcmMpKTtcbi8vIHJldmVydGluZyBnb29kIG9sZCBmYXRpb25lZCByZWdleHBcbmNvbnN0IGNiX3V0b2IgPSAoYykgPT4ge1xuICAgIGlmIChjLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdmFyIGNjID0gYy5jaGFyQ29kZUF0KDApO1xuICAgICAgICByZXR1cm4gY2MgPCAweDgwID8gY1xuICAgICAgICAgICAgOiBjYyA8IDB4ODAwID8gKF9mcm9tQ0MoMHhjMCB8IChjYyA+Pj4gNikpXG4gICAgICAgICAgICAgICAgKyBfZnJvbUNDKDB4ODAgfCAoY2MgJiAweDNmKSkpXG4gICAgICAgICAgICAgICAgOiAoX2Zyb21DQygweGUwIHwgKChjYyA+Pj4gMTIpICYgMHgwZikpXG4gICAgICAgICAgICAgICAgICAgICsgX2Zyb21DQygweDgwIHwgKChjYyA+Pj4gNikgJiAweDNmKSlcbiAgICAgICAgICAgICAgICAgICAgKyBfZnJvbUNDKDB4ODAgfCAoY2MgJiAweDNmKSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGNjID0gMHgxMDAwMFxuICAgICAgICAgICAgKyAoYy5jaGFyQ29kZUF0KDApIC0gMHhEODAwKSAqIDB4NDAwXG4gICAgICAgICAgICArIChjLmNoYXJDb2RlQXQoMSkgLSAweERDMDApO1xuICAgICAgICByZXR1cm4gKF9mcm9tQ0MoMHhmMCB8ICgoY2MgPj4+IDE4KSAmIDB4MDcpKVxuICAgICAgICAgICAgKyBfZnJvbUNDKDB4ODAgfCAoKGNjID4+PiAxMikgJiAweDNmKSlcbiAgICAgICAgICAgICsgX2Zyb21DQygweDgwIHwgKChjYyA+Pj4gNikgJiAweDNmKSlcbiAgICAgICAgICAgICsgX2Zyb21DQygweDgwIHwgKGNjICYgMHgzZikpKTtcbiAgICB9XG59O1xuY29uc3QgcmVfdXRvYiA9IC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZGXXxbXlxceDAwLVxceDdGXS9nO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaG91bGQgaGF2ZSBiZWVuIGludGVybmFsIHVzZSBvbmx5LlxuICogQHBhcmFtIHtzdHJpbmd9IHNyYyBVVEYtOCBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFVURi0xNiBzdHJpbmdcbiAqL1xuY29uc3QgdXRvYiA9ICh1KSA9PiB1LnJlcGxhY2UocmVfdXRvYiwgY2JfdXRvYik7XG4vL1xuY29uc3QgX2VuY29kZSA9IF9oYXNCdWZmZXJcbiAgICA/IChzKSA9PiBCdWZmZXIuZnJvbShzLCAndXRmOCcpLnRvU3RyaW5nKCdiYXNlNjQnKVxuICAgIDogX1RFXG4gICAgICAgID8gKHMpID0+IF9mcm9tVWludDhBcnJheShfVEUuZW5jb2RlKHMpKVxuICAgICAgICA6IChzKSA9PiBfYnRvYSh1dG9iKHMpKTtcbi8qKlxuICogY29udmVydHMgYSBVVEYtOC1lbmNvZGVkIHN0cmluZyB0byBhIEJhc2U2NCBzdHJpbmcuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFt1cmxzYWZlXSBpZiBgdHJ1ZWAgbWFrZSB0aGUgcmVzdWx0IFVSTC1zYWZlXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBCYXNlNjQgc3RyaW5nXG4gKi9cbmNvbnN0IGVuY29kZSA9IChzcmMsIHVybHNhZmUgPSBmYWxzZSkgPT4gdXJsc2FmZVxuICAgID8gX21rVXJpU2FmZShfZW5jb2RlKHNyYykpXG4gICAgOiBfZW5jb2RlKHNyYyk7XG4vKipcbiAqIGNvbnZlcnRzIGEgVVRGLTgtZW5jb2RlZCBzdHJpbmcgdG8gVVJMLXNhZmUgQmFzZTY0IFJGQzQ2NDggwqc1LlxuICogQHJldHVybnMge3N0cmluZ30gQmFzZTY0IHN0cmluZ1xuICovXG5jb25zdCBlbmNvZGVVUkkgPSAoc3JjKSA9PiBlbmNvZGUoc3JjLCB0cnVlKTtcbi8vIFRoaXMgdHJpY2sgaXMgZm91bmQgYnJva2VuIGh0dHBzOi8vZ2l0aHViLmNvbS9kYW5rb2dhaS9qcy1iYXNlNjQvaXNzdWVzLzEzMFxuLy8gY29uc3QgYnRvdSA9IChzcmM6IHN0cmluZykgPT4gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZShzcmMpKTtcbi8vIHJldmVydGluZyBnb29kIG9sZCBmYXRpb25lZCByZWdleHBcbmNvbnN0IHJlX2J0b3UgPSAvW1xceEMwLVxceERGXVtcXHg4MC1cXHhCRl18W1xceEUwLVxceEVGXVtcXHg4MC1cXHhCRl17Mn18W1xceEYwLVxceEY3XVtcXHg4MC1cXHhCRl17M30vZztcbmNvbnN0IGNiX2J0b3UgPSAoY2NjYykgPT4ge1xuICAgIHN3aXRjaCAoY2NjYy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdmFyIGNwID0gKCgweDA3ICYgY2NjYy5jaGFyQ29kZUF0KDApKSA8PCAxOClcbiAgICAgICAgICAgICAgICB8ICgoMHgzZiAmIGNjY2MuY2hhckNvZGVBdCgxKSkgPDwgMTIpXG4gICAgICAgICAgICAgICAgfCAoKDB4M2YgJiBjY2NjLmNoYXJDb2RlQXQoMikpIDw8IDYpXG4gICAgICAgICAgICAgICAgfCAoMHgzZiAmIGNjY2MuY2hhckNvZGVBdCgzKSksIG9mZnNldCA9IGNwIC0gMHgxMDAwMDtcbiAgICAgICAgICAgIHJldHVybiAoX2Zyb21DQygob2Zmc2V0ID4+PiAxMCkgKyAweEQ4MDApXG4gICAgICAgICAgICAgICAgKyBfZnJvbUNDKChvZmZzZXQgJiAweDNGRikgKyAweERDMDApKTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgcmV0dXJuIF9mcm9tQ0MoKCgweDBmICYgY2NjYy5jaGFyQ29kZUF0KDApKSA8PCAxMilcbiAgICAgICAgICAgICAgICB8ICgoMHgzZiAmIGNjY2MuY2hhckNvZGVBdCgxKSkgPDwgNilcbiAgICAgICAgICAgICAgICB8ICgweDNmICYgY2NjYy5jaGFyQ29kZUF0KDIpKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gX2Zyb21DQygoKDB4MWYgJiBjY2NjLmNoYXJDb2RlQXQoMCkpIDw8IDYpXG4gICAgICAgICAgICAgICAgfCAoMHgzZiAmIGNjY2MuY2hhckNvZGVBdCgxKSkpO1xuICAgIH1cbn07XG4vKipcbiAqIEBkZXByZWNhdGVkIHNob3VsZCBoYXZlIGJlZW4gaW50ZXJuYWwgdXNlIG9ubHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3JjIFVURi0xNiBzdHJpbmdcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFVURi04IHN0cmluZ1xuICovXG5jb25zdCBidG91ID0gKGIpID0+IGIucmVwbGFjZShyZV9idG91LCBjYl9idG91KTtcbi8qKlxuICogcG9seWZpbGwgdmVyc2lvbiBvZiBgYXRvYmBcbiAqL1xuY29uc3QgYXRvYlBvbHlmaWxsID0gKGFzYykgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdwb2x5ZmlsbGVkJyk7XG4gICAgYXNjID0gYXNjLnJlcGxhY2UoL1xccysvZywgJycpO1xuICAgIGlmICghYjY0cmUudGVzdChhc2MpKVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdtYWxmb3JtZWQgYmFzZTY0LicpO1xuICAgIGFzYyArPSAnPT0nLnNsaWNlKDIgLSAoYXNjLmxlbmd0aCAmIDMpKTtcbiAgICBsZXQgdTI0LCBiaW4gPSAnJywgcjEsIHIyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNjLmxlbmd0aDspIHtcbiAgICAgICAgdTI0ID0gYjY0dGFiW2FzYy5jaGFyQXQoaSsrKV0gPDwgMThcbiAgICAgICAgICAgIHwgYjY0dGFiW2FzYy5jaGFyQXQoaSsrKV0gPDwgMTJcbiAgICAgICAgICAgIHwgKHIxID0gYjY0dGFiW2FzYy5jaGFyQXQoaSsrKV0pIDw8IDZcbiAgICAgICAgICAgIHwgKHIyID0gYjY0dGFiW2FzYy5jaGFyQXQoaSsrKV0pO1xuICAgICAgICBiaW4gKz0gcjEgPT09IDY0ID8gX2Zyb21DQyh1MjQgPj4gMTYgJiAyNTUpXG4gICAgICAgICAgICA6IHIyID09PSA2NCA/IF9mcm9tQ0ModTI0ID4+IDE2ICYgMjU1LCB1MjQgPj4gOCAmIDI1NSlcbiAgICAgICAgICAgICAgICA6IF9mcm9tQ0ModTI0ID4+IDE2ICYgMjU1LCB1MjQgPj4gOCAmIDI1NSwgdTI0ICYgMjU1KTtcbiAgICB9XG4gICAgcmV0dXJuIGJpbjtcbn07XG4vKipcbiAqIGRvZXMgd2hhdCBgd2luZG93LmF0b2JgIG9mIHdlYiBicm93c2VycyBkby5cbiAqIEBwYXJhbSB7U3RyaW5nfSBhc2MgQmFzZTY0LWVuY29kZWQgc3RyaW5nXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBiaW5hcnkgc3RyaW5nXG4gKi9cbmNvbnN0IF9hdG9iID0gX2hhc2F0b2IgPyAoYXNjKSA9PiBhdG9iKF90aWR5QjY0KGFzYykpXG4gICAgOiBfaGFzQnVmZmVyID8gKGFzYykgPT4gQnVmZmVyLmZyb20oYXNjLCAnYmFzZTY0JykudG9TdHJpbmcoJ2JpbmFyeScpXG4gICAgICAgIDogYXRvYlBvbHlmaWxsO1xuLy9cbmNvbnN0IF90b1VpbnQ4QXJyYXkgPSBfaGFzQnVmZmVyXG4gICAgPyAoYSkgPT4gX1U4QWZyb20oQnVmZmVyLmZyb20oYSwgJ2Jhc2U2NCcpKVxuICAgIDogKGEpID0+IF9VOEFmcm9tKF9hdG9iKGEpLCBjID0+IGMuY2hhckNvZGVBdCgwKSk7XG4vKipcbiAqIGNvbnZlcnRzIGEgQmFzZTY0IHN0cmluZyB0byBhIFVpbnQ4QXJyYXkuXG4gKi9cbmNvbnN0IHRvVWludDhBcnJheSA9IChhKSA9PiBfdG9VaW50OEFycmF5KF91blVSSShhKSk7XG4vL1xuY29uc3QgX2RlY29kZSA9IF9oYXNCdWZmZXJcbiAgICA/IChhKSA9PiBCdWZmZXIuZnJvbShhLCAnYmFzZTY0JykudG9TdHJpbmcoJ3V0ZjgnKVxuICAgIDogX1REXG4gICAgICAgID8gKGEpID0+IF9URC5kZWNvZGUoX3RvVWludDhBcnJheShhKSlcbiAgICAgICAgOiAoYSkgPT4gYnRvdShfYXRvYihhKSk7XG5jb25zdCBfdW5VUkkgPSAoYSkgPT4gX3RpZHlCNjQoYS5yZXBsYWNlKC9bLV9dL2csIChtMCkgPT4gbTAgPT0gJy0nID8gJysnIDogJy8nKSk7XG4vKipcbiAqIGNvbnZlcnRzIGEgQmFzZTY0IHN0cmluZyB0byBhIFVURi04IHN0cmluZy5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzcmMgQmFzZTY0IHN0cmluZy4gIEJvdGggbm9ybWFsIGFuZCBVUkwtc2FmZSBhcmUgc3VwcG9ydGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBVVEYtOCBzdHJpbmdcbiAqL1xuY29uc3QgZGVjb2RlID0gKHNyYykgPT4gX2RlY29kZShfdW5VUkkoc3JjKSk7XG4vKipcbiAqIGNoZWNrIGlmIGEgdmFsdWUgaXMgYSB2YWxpZCBCYXNlNjQgc3RyaW5nXG4gKiBAcGFyYW0ge1N0cmluZ30gc3JjIGEgdmFsdWUgdG8gY2hlY2tcbiAgKi9cbmNvbnN0IGlzVmFsaWQgPSAoc3JjKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzcmMgIT09ICdzdHJpbmcnKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgcyA9IHNyYy5yZXBsYWNlKC9cXHMrL2csICcnKS5yZXBsYWNlKC89ezAsMn0kLywgJycpO1xuICAgIHJldHVybiAhL1teXFxzMC05YS16QS1aXFwrL10vLnRlc3QocykgfHwgIS9bXlxcczAtOWEtekEtWlxcLV9dLy50ZXN0KHMpO1xufTtcbi8vXG5jb25zdCBfbm9FbnVtID0gKHYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICB2YWx1ZTogdiwgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWVcbiAgICB9O1xufTtcbi8qKlxuICogZXh0ZW5kIFN0cmluZy5wcm90b3R5cGUgd2l0aCByZWxldmFudCBtZXRob2RzXG4gKi9cbmNvbnN0IGV4dGVuZFN0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBfYWRkID0gKG5hbWUsIGJvZHkpID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCBuYW1lLCBfbm9FbnVtKGJvZHkpKTtcbiAgICBfYWRkKCdmcm9tQmFzZTY0JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZGVjb2RlKHRoaXMpOyB9KTtcbiAgICBfYWRkKCd0b0Jhc2U2NCcsIGZ1bmN0aW9uICh1cmxzYWZlKSB7IHJldHVybiBlbmNvZGUodGhpcywgdXJsc2FmZSk7IH0pO1xuICAgIF9hZGQoJ3RvQmFzZTY0VVJJJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZW5jb2RlKHRoaXMsIHRydWUpOyB9KTtcbiAgICBfYWRkKCd0b0Jhc2U2NFVSTCcsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVuY29kZSh0aGlzLCB0cnVlKTsgfSk7XG4gICAgX2FkZCgndG9VaW50OEFycmF5JywgZnVuY3Rpb24gKCkgeyByZXR1cm4gdG9VaW50OEFycmF5KHRoaXMpOyB9KTtcbn07XG4vKipcbiAqIGV4dGVuZCBVaW50OEFycmF5LnByb3RvdHlwZSB3aXRoIHJlbGV2YW50IG1ldGhvZHNcbiAqL1xuY29uc3QgZXh0ZW5kVWludDhBcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBfYWRkID0gKG5hbWUsIGJvZHkpID0+IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShVaW50OEFycmF5LnByb3RvdHlwZSwgbmFtZSwgX25vRW51bShib2R5KSk7XG4gICAgX2FkZCgndG9CYXNlNjQnLCBmdW5jdGlvbiAodXJsc2FmZSkgeyByZXR1cm4gZnJvbVVpbnQ4QXJyYXkodGhpcywgdXJsc2FmZSk7IH0pO1xuICAgIF9hZGQoJ3RvQmFzZTY0VVJJJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnJvbVVpbnQ4QXJyYXkodGhpcywgdHJ1ZSk7IH0pO1xuICAgIF9hZGQoJ3RvQmFzZTY0VVJMJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gZnJvbVVpbnQ4QXJyYXkodGhpcywgdHJ1ZSk7IH0pO1xufTtcbi8qKlxuICogZXh0ZW5kIEJ1aWx0aW4gcHJvdG90eXBlcyB3aXRoIHJlbGV2YW50IG1ldGhvZHNcbiAqL1xuY29uc3QgZXh0ZW5kQnVpbHRpbnMgPSAoKSA9PiB7XG4gICAgZXh0ZW5kU3RyaW5nKCk7XG4gICAgZXh0ZW5kVWludDhBcnJheSgpO1xufTtcbmNvbnN0IGdCYXNlNjQgPSB7XG4gICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICBWRVJTSU9OOiBWRVJTSU9OLFxuICAgIGF0b2I6IF9hdG9iLFxuICAgIGF0b2JQb2x5ZmlsbDogYXRvYlBvbHlmaWxsLFxuICAgIGJ0b2E6IF9idG9hLFxuICAgIGJ0b2FQb2x5ZmlsbDogYnRvYVBvbHlmaWxsLFxuICAgIGZyb21CYXNlNjQ6IGRlY29kZSxcbiAgICB0b0Jhc2U2NDogZW5jb2RlLFxuICAgIGVuY29kZTogZW5jb2RlLFxuICAgIGVuY29kZVVSSTogZW5jb2RlVVJJLFxuICAgIGVuY29kZVVSTDogZW5jb2RlVVJJLFxuICAgIHV0b2I6IHV0b2IsXG4gICAgYnRvdTogYnRvdSxcbiAgICBkZWNvZGU6IGRlY29kZSxcbiAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxuICAgIGZyb21VaW50OEFycmF5OiBmcm9tVWludDhBcnJheSxcbiAgICB0b1VpbnQ4QXJyYXk6IHRvVWludDhBcnJheSxcbiAgICBleHRlbmRTdHJpbmc6IGV4dGVuZFN0cmluZyxcbiAgICBleHRlbmRVaW50OEFycmF5OiBleHRlbmRVaW50OEFycmF5LFxuICAgIGV4dGVuZEJ1aWx0aW5zOiBleHRlbmRCdWlsdGlucyxcbn07XG4vLyBtYWtlY2pzOkNVVCAvL1xuZXhwb3J0IHsgdmVyc2lvbiB9O1xuZXhwb3J0IHsgVkVSU0lPTiB9O1xuZXhwb3J0IHsgX2F0b2IgYXMgYXRvYiB9O1xuZXhwb3J0IHsgYXRvYlBvbHlmaWxsIH07XG5leHBvcnQgeyBfYnRvYSBhcyBidG9hIH07XG5leHBvcnQgeyBidG9hUG9seWZpbGwgfTtcbmV4cG9ydCB7IGRlY29kZSBhcyBmcm9tQmFzZTY0IH07XG5leHBvcnQgeyBlbmNvZGUgYXMgdG9CYXNlNjQgfTtcbmV4cG9ydCB7IHV0b2IgfTtcbmV4cG9ydCB7IGVuY29kZSB9O1xuZXhwb3J0IHsgZW5jb2RlVVJJIH07XG5leHBvcnQgeyBlbmNvZGVVUkkgYXMgZW5jb2RlVVJMIH07XG5leHBvcnQgeyBidG91IH07XG5leHBvcnQgeyBkZWNvZGUgfTtcbmV4cG9ydCB7IGlzVmFsaWQgfTtcbmV4cG9ydCB7IGZyb21VaW50OEFycmF5IH07XG5leHBvcnQgeyB0b1VpbnQ4QXJyYXkgfTtcbmV4cG9ydCB7IGV4dGVuZFN0cmluZyB9O1xuZXhwb3J0IHsgZXh0ZW5kVWludDhBcnJheSB9O1xuZXhwb3J0IHsgZXh0ZW5kQnVpbHRpbnMgfTtcbi8vIGFuZCBmaW5hbGx5LFxuZXhwb3J0IHsgZ0Jhc2U2NCBhcyBCYXNlNjQgfTtcbiIsIlxuLy8gY29uc3QgeGxzeCA9IHJlcXVpcmUoXCJ4bHN4XCIpO1xuaW1wb3J0IHt1dWlkdjR9IGZyb20gXCIuL2NvbW1vblwiXG5pbXBvcnQgeyBCYXNlNjQgfSBmcm9tICdqcy1iYXNlNjQnO1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvIVwiKVxuXG4vLyBjb25zdCBmaWxlUGlja2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlXCIpXG5jb25zdCBuYW1lTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmFtZS1saXN0XCIpXG5jb25zdCBnZW5lcmF0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpXG5jb25zdCBsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ1wiKVxuY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlXCIpO1xuY29uc3Qgc3BlY2lhbFJ1bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGVjaWFsLXJ1bGVzXCIpO1xuY29uc3Qgc2hvd1JlY2lwaWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctcmVjaXBpZW50c1wiKVxuXG5cbmNvbnN0IG1haW5QYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShcIi9nZW5lcmF0b3IuaHRtbFwiLCBcIlwiKVxuXG5cblxubGV0IHByaW50ID0gKC4uLmFyZ3MpID0+IHtcbiAgICBjb25zb2xlLmxvZyguLi5hcmdzKTtcbiAgICBsZXQgZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZWxtLmlubmVyVGV4dCA9IGFyZ3Muam9pbihcIiwgXCIpXG4gICAgbG9nLnByZXBlbmQoZWxtKVxufVxuXG5sZXQgZXJyb3IgPSAoLi4uYXJncykgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoLi4uYXJncyk7XG4gICAgbGV0IGVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGVsbS5zdHlsZS5jb2xvcj1cInJlZFwiO1xuICAgIGVsbS5pbm5lclRleHQgPSBhcmdzLmpvaW4oXCIsIFwiKVxuICAgIGxvZy5wcmVwZW5kKGVsbSlcbn1cblxuXG5sZXQgdGFibGVHZW5lcmF0ZSA9ICh0YWJsZSwgaGVhZGVycywgZGF0YSwgaWQ9dXVpZHY0KCkpID0+IHtcblxuICAgIHRhYmxlLmlubmVySFRNTCA9IFwiXCJcbiAgICAvL2dlbmVyYXRlIGhlYWRlcnNcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgIGhlYWRlcnMuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gICAgICAgIHRoLmlubmVySFRNTCA9IGVsZW1lbnQ7XG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRoKVxuICAgIH0pO1xuXG4gICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpXG4gICAgXG4gICAgLy9nZW5lcmF0ZSBib2R5XG5cbiAgICBkYXRhLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgcm93LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIHRkLmNsYXNzTGlzdC5hZGQoYCR7aWR9LWl0ZW0tJHtpbmRleH1gKVxuICAgICAgICAgICAgaWYodHlwZW9mIGl0ZW0gPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIHRkLmFwcGVuZENoaWxkKGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZC5pbm5lckhUTUwgPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZClcbiAgICAgICAgfSlcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpXG4gICAgfSlcblxufVxuXG5sZXQgc2hvd1JlY2lwcmllbnRzRnVuY3Q7XG5cbmxldCBnZW5lcmF0ZSA9ICgpID0+IHtcbiAgICBsZXQgc2VwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInNlcFwiXTpjaGVja2VkJykudmFsdWU7XG4gICAgLy9sZXQgc2VwID0gQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShcInNlcFwiKSkuZmluZChyID0+IHIuY2hlY2tlZCkudmFsdWU7XG4gICAgbGV0IG5hbWVzID0gbmFtZUxpc3QudmFsdWVcbiAgICBpZihuYW1lTGlzdC52YWx1ZSA9PSBcIlwiKSB7XG4gICAgICAgIGVycm9yKFwiTXVzdCBoYXZlIGF0IGxlYXN0IDIgbmFtZXNcIilcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgXG4gICAgLy9zcGxpdCBzdHJpbmdcbiAgICBpZihzZXAgPT09IFwibmV3bGluZVwiKSB7XG4gICAgICAgIG5hbWVzID0gbmFtZUxpc3QudmFsdWUuc3BsaXQoXCJcXG5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmFtZXMgPSBuYW1lTGlzdC52YWx1ZS5zcGxpdChcIixcIik7XG4gICAgfVxuXG4gICBcbiAgICBpZihuYW1lcy5sZW5ndGggPCAyKSB7XG4gICAgICAgIGVycm9yKFwiTXVzdCBoYXZlIGF0IGxlYXN0IDIgbmFtZXNcIilcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy9jbGVhbiB1cCB0ZXh0IGFuZCBnZW5lcmF0ZSBsaW5rc1xuICAgIG5hbWVzID0gbmFtZXMubWFwKChuYW1lKT0+IHtcbiAgICAgICAgcmV0dXJuIG5hbWUudHJpbSgpO1xuICAgIH0pXG5cblxuICAgIFxuICAgIGNvbnN0IHBhaXJzID0gZ2VuZXJhdGVQYWlycyhuYW1lcyk7XG5cbiAgICBjb25zdCBwYWlyTGluayA9IHBhaXJzLm1hcCgocGFpcikgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgcmVjaXBpZW50OiBwYWlyWzFdLFxuICAgICAgICAgICAgc3BlY2lhbFJ1bGVzOiAoc3BlY2lhbFJ1bGVzLnZhbHVlPT1cIlwiKT9udWxsOnNwZWNpYWxSdWxlcy52YWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGluayA9IGAke21haW5QYWdlfT9zYW50YT0ke2VuY29kZVVSSUNvbXBvbmVudChwYWlyWzBdKX0mZGF0YT0ke2VuY29kZVVSSUNvbXBvbmVudChCYXNlNjQuZW5jb2RlKEpTT04uc3RyaW5naWZ5KGRhdGEpKSl9YCBcblxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4ub25jbGljayA9ICgpPT57XG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChsaW5rKTtcbiAgICAgICAgfVxuICAgICAgICBzcGFuLmlubmVySFRNTCA9IGxpbmtcblxuICAgICAgICByZXR1cm4gW3BhaXJbMF0sIHNwYW4sIHBhaXJbMV1dXG4gICAgfSlcblxuXG4gICAgY29uc3QgaWQgPSBcIm91dHB1dFwiXG4gICAgdGFibGVHZW5lcmF0ZSh0YWJsZSwgW1wiU2FudGFcIiwgXCJTYW50YSdzIExpbmsgKGNsaWNrIHRvIGNvcHkpXCIsIFwiUmVjaXBpZW50XCJdLCBwYWlyTGluaywgaWQpXG5cbiAgICAvL3NldHVwIHNob3cgcmVjaXByaWVudHNcbiAgICBpZihzaG93UmVjaXByaWVudHNGdW5jdCkge1xuICAgICAgICBzaG93UmVjaXBpZW50cy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHNob3dSZWNpcHJpZW50c0Z1bmN0KVxuICAgIH1cbiAgICBcblxuICAgIHNob3dSZWNpcHJpZW50c0Z1bmN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbG1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7aWR9LWl0ZW0tMmApXG4gICAgICAgIGVsbXMuZm9yRWFjaChlbG09PntcblxuICAgICAgICAgICAgZWxtLnN0eWxlLmRpc3BsYXkgPSAoc2hvd1JlY2lwaWVudHMuY2hlY2tlZCk/bnVsbDpcIm5vbmVcIlxuICAgICAgICB9KVxuICAgIH1cbiAgICBzaG93UmVjaXByaWVudHNGdW5jdCgpXG4gICAgc2hvd1JlY2lwaWVudHMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBzaG93UmVjaXByaWVudHNGdW5jdClcbiAgICAvL3ByaW50KHNlcClcbn1cblxuXG5cbmxldCBzaHVmZmxlID0gKGFycmF5KSA9PiB7XG4gICAgcmV0dXJuIGFycmF5XG4gICAgICAgIC5tYXAoKHZhbHVlKSA9PiAoeyB2YWx1ZSwgc29ydDogTWF0aC5yYW5kb20oKSB9KSlcbiAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEuc29ydCAtIGIuc29ydClcbiAgICAgICAgLm1hcCgoeyB2YWx1ZSB9KSA9PiB2YWx1ZSlcbn1cblxubGV0IGdlbmVyYXRlUGFpcnMgPSAocGVvcGxlKSA9PiB7XG4gICAgbGV0IHNodWZmbGVkID0gc2h1ZmZsZShwZW9wbGUpXG4gICAgbGV0IHBhaXJzID0gc2h1ZmZsZWQubWFwKCh2YWx1ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYoIXNodWZmbGVkW2luZGV4KzFdKSB7IC8vZW5kIGVkZ2UgY2FzZVxuICAgICAgICAgICAgcmV0dXJuIFt2YWx1ZSwgc2h1ZmZsZWRbMF1dXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt2YWx1ZSwgc2h1ZmZsZWRbaW5kZXgrMV1dXG4gICAgfSlcblxuICAgIHJldHVybiBwYWlyc1xuXG59XG5cblxuXG5nZW5lcmF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIFxuICAgIGdlbmVyYXRlKClcbn0pIl0sIm5hbWVzIjpbIl9oYXNidG9hIiwiYnRvYSIsIl9oYXNCdWZmZXIiLCJCdWZmZXIiLCJfVEUiLCJUZXh0RGVjb2RlciIsIlRleHRFbmNvZGVyIiwidW5kZWZpbmVkIiwiYjY0Y2hzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJfZnJvbUNDIiwiYSIsInRhYiIsImZvckVhY2giLCJjIiwiaSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImJpbmQiLCJfbWtVcmlTYWZlIiwiVWludDhBcnJheSIsImZyb20iLCJzcmMiLCJyZXBsYWNlIiwibTAiLCJfYnRvYSIsImJpbiIsInRvU3RyaW5nIiwidTMyIiwiYzAiLCJjMSIsImMyIiwiYXNjIiwicGFkIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsIlR5cGVFcnJvciIsInN1YnN0cmluZyIsIl9mcm9tVWludDhBcnJheSIsInU4YSIsInN0cnMiLCJsIiwicHVzaCIsImFwcGx5Iiwic3ViYXJyYXkiLCJqb2luIiwiY2JfdXRvYiIsImNjIiwicmVfdXRvYiIsIl9lbmNvZGUiLCJzIiwiZW5jb2RlIiwiZ0Jhc2U2NCIsInVybHNhZmUiLCJjb25zb2xlIiwibG9nIiwibmFtZUxpc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2VuZXJhdGVCdXR0b24iLCJ0YWJsZSIsInNwZWNpYWxSdWxlcyIsInNob3dSZWNpcGllbnRzIiwibWFpblBhZ2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzaG93UmVjaXByaWVudHNGdW5jdCIsImVycm9yIiwiYXJncyIsImVsbSIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImNvbG9yIiwiaW5uZXJUZXh0IiwicHJlcGVuZCIsImdlbmVyYXRlIiwic2VwIiwicXVlcnlTZWxlY3RvciIsInZhbHVlIiwibmFtZXMiLCJzcGxpdCIsIm1hcCIsIm5hbWUiLCJ0cmltIiwicGFpckxpbmsiLCJnZW5lcmF0ZVBhaXJzIiwicGFpciIsImRhdGEiLCJyZWNpcGllbnQiLCJsaW5rIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsInNwYW4iLCJvbmNsaWNrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiaW5uZXJIVE1MIiwiaWQiLCJoZWFkZXJzIiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwidXVpZHY0IiwidHIiLCJlbGVtZW50IiwiaW5kZXgiLCJ0aCIsImFwcGVuZENoaWxkIiwicm93IiwiaXRlbSIsInRkIiwiY2xhc3NMaXN0IiwiYWRkIiwidGFibGVHZW5lcmF0ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGlzcGxheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJwZW9wbGUiLCJzaHVmZmxlZCIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwiYiJdLCJzb3VyY2VSb290IjoiIn0=