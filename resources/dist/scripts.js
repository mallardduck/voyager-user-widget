!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){voyager.component("UserWidget",{props:["count","timestamps","thisYear","lastYear","thisMonth","lastMonth"],template:n(2).default})},function(t,e,n){"use strict";n.r(e);e.default='<div class="mt-5 grid grid-cols-1 gap-5" :class="\'sm:grid-cols-\'+(timestamps ? 3 : 1)"> <card title="Total"> {{ count }} </card> <card title="This month" v-if="timestamps"> <template #actions> <icon icon="trending-up" class="text-green-500" v-if="thisMonth > lastMonth"/> <icon icon="trending-down" class="text-red-500" v-if="thisMonth < lastMonth"/> </template> {{ thisMonth }} </card> <card title="This year" v-if="timestamps"> <template #actions> <icon icon="trending-up" class="text-green-500" v-if="thisYear > lastYear"/> <icon icon="trending-down" class="text-red-500" v-if="thisYear < lastYear"/> </template> {{ thisYear }} </card> </div>'}]);