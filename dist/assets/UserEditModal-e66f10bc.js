import{a1 as ue,a2 as D,a8 as de,am as B,an as V,ao as he,ap as fe,aq as K,ar as W,as as me,at as pe,a4 as k,a5 as ve,a as S,a7 as ye,au as be,j as a,V as O,g as ge,av as xe,aw as Re,ax as Se,r as f,al as _,K as _e,z as je,A as G,t as z,I as ke}from"./index-53a02a42.js";var Ne=function(e){ue(r,e);function r(o,s){var t;return t=e.call(this)||this,t.client=o,t.options=s,t.trackedProps=[],t.previousSelectError=null,t.bindMethods(),t.setOptions(s),t}var i=r.prototype;return i.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},i.onSubscribe=function(){this.listeners.length===1&&(this.currentQuery.addObserver(this),H(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},i.onUnsubscribe=function(){this.listeners.length||this.destroy()},i.shouldFetchOnReconnect=function(){return U(this.currentQuery,this.options,this.options.refetchOnReconnect)},i.shouldFetchOnWindowFocus=function(){return U(this.currentQuery,this.options,this.options.refetchOnWindowFocus)},i.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},i.setOptions=function(s,t){var c=this.options,l=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(s),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=c.queryKey),this.updateQuery();var n=this.hasListeners();n&&X(this.currentQuery,l,this.options,c)&&this.executeFetch(),this.updateResult(t),n&&(this.currentQuery!==l||this.options.enabled!==c.enabled||this.options.staleTime!==c.staleTime)&&this.updateStaleTimeout();var u=this.computeRefetchInterval();n&&(this.currentQuery!==l||this.options.enabled!==c.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)},i.getOptimisticResult=function(s){var t=this.client.defaultQueryObserverOptions(s),c=this.client.getQueryCache().build(this.client,t);return this.createResult(c,t)},i.getCurrentResult=function(){return this.currentResult},i.trackResult=function(s,t){var c=this,l={},n=function(d){c.trackedProps.includes(d)||c.trackedProps.push(d)};return Object.keys(s).forEach(function(u){Object.defineProperty(l,u,{configurable:!1,enumerable:!0,get:function(){return n(u),s[u]}})}),(t.useErrorBoundary||t.suspense)&&n("error"),l},i.getNextResult=function(s){var t=this;return new Promise(function(c,l){var n=t.subscribe(function(u){u.isFetching||(n(),u.isError&&(s!=null&&s.throwOnError)?l(u.error):c(u))})})},i.getCurrentQuery=function(){return this.currentQuery},i.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},i.refetch=function(s){return this.fetch(D({},s,{meta:{refetchPage:s==null?void 0:s.refetchPage}}))},i.fetchOptimistic=function(s){var t=this,c=this.client.defaultQueryObserverOptions(s),l=this.client.getQueryCache().build(this.client,c);return l.fetch().then(function(){return t.createResult(l,c)})},i.fetch=function(s){var t=this;return this.executeFetch(s).then(function(){return t.updateResult(),t.currentResult})},i.executeFetch=function(s){this.updateQuery();var t=this.currentQuery.fetch(this.options,s);return s!=null&&s.throwOnError||(t=t.catch(de)),t},i.updateStaleTimeout=function(){var s=this;if(this.clearStaleTimeout(),!(B||this.currentResult.isStale||!V(this.options.staleTime))){var t=he(this.currentResult.dataUpdatedAt,this.options.staleTime),c=t+1;this.staleTimeoutId=setTimeout(function(){s.currentResult.isStale||s.updateResult()},c)}},i.computeRefetchInterval=function(){var s;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(s=this.options.refetchInterval)!=null?s:!1},i.updateRefetchInterval=function(s){var t=this;this.clearRefetchInterval(),this.currentRefetchInterval=s,!(B||this.options.enabled===!1||!V(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(function(){(t.options.refetchIntervalInBackground||fe.isFocused())&&t.executeFetch()},this.currentRefetchInterval))},i.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())},i.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},i.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},i.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},i.createResult=function(s,t){var c=this.currentQuery,l=this.options,n=this.currentResult,u=this.currentResultState,d=this.currentResultOptions,m=s!==c,v=m?s.state:this.currentQueryInitialState,g=m?this.currentResult:this.previousQueryResult,h=s.state,x=h.dataUpdatedAt,E=h.error,w=h.errorUpdatedAt,F=h.isFetching,p=h.status,$=!1,L=!1,y;if(t.optimisticResults){var M=this.hasListeners(),oe=!M&&H(s,t),le=M&&X(s,c,t,l);(oe||le)&&(F=!0,x||(p="loading"))}if(t.keepPreviousData&&!h.dataUpdateCount&&(g!=null&&g.isSuccess)&&p!=="error")y=g.data,x=g.dataUpdatedAt,p=g.status,$=!0;else if(t.select&&typeof h.data<"u"){var q;if(n&&h.data===(u==null?void 0:u.data)&&t.select===((q=this.previousSelect)==null?void 0:q.fn)&&!this.previousSelectError)y=this.previousSelect.result;else try{y=t.select(h.data),t.structuralSharing!==!1&&(y=K(n==null?void 0:n.data,y)),this.previousSelect={fn:t.select,result:y},this.previousSelectError=null}catch(R){W().error(R),E=R,this.previousSelectError=R,w=Date.now(),p="error"}}else y=h.data;if(typeof t.placeholderData<"u"&&typeof y>"u"&&(p==="loading"||p==="idle")){var b;if(n!=null&&n.isPlaceholderData&&t.placeholderData===(d==null?void 0:d.placeholderData))b=n.data;else if(b=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof b<"u")try{b=t.select(b),t.structuralSharing!==!1&&(b=K(n==null?void 0:n.data,b)),this.previousSelectError=null}catch(R){W().error(R),E=R,this.previousSelectError=R,w=Date.now(),p="error"}typeof b<"u"&&(p="success",y=b,L=!0)}var ce={status:p,isLoading:p==="loading",isSuccess:p==="success",isError:p==="error",isIdle:p==="idle",data:y,dataUpdatedAt:x,error:E,errorUpdatedAt:w,failureCount:h.fetchFailureCount,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>v.dataUpdateCount||h.errorUpdateCount>v.errorUpdateCount,isFetching:F,isRefetching:F&&p!=="loading",isLoadingError:p==="error"&&h.dataUpdatedAt===0,isPlaceholderData:L,isPreviousData:$,isRefetchError:p==="error"&&h.dataUpdatedAt!==0,isStale:T(s,t),refetch:this.refetch,remove:this.remove};return ce},i.shouldNotifyListeners=function(s,t){if(!t)return!0;var c=this.options,l=c.notifyOnChangeProps,n=c.notifyOnChangePropsExclusions;if(!l&&!n||l==="tracked"&&!this.trackedProps.length)return!0;var u=l==="tracked"?this.trackedProps:l;return Object.keys(s).some(function(d){var m=d,v=s[m]!==t[m],g=u==null?void 0:u.some(function(x){return x===d}),h=n==null?void 0:n.some(function(x){return x===d});return v&&!h&&(!u||g)})},i.updateResult=function(s){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!me(this.currentResult,t)){var c={cache:!0};(s==null?void 0:s.listeners)!==!1&&this.shouldNotifyListeners(this.currentResult,t)&&(c.listeners=!0),this.notify(D({},c,s))}},i.updateQuery=function(){var s=this.client.getQueryCache().build(this.client,this.options);if(s!==this.currentQuery){var t=this.currentQuery;this.currentQuery=s,this.currentQueryInitialState=s.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),s.addObserver(this))}},i.onQueryUpdate=function(s){var t={};s.type==="success"?t.onSuccess=!0:s.type==="error"&&!pe(s.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},i.notify=function(s){var t=this;k.batch(function(){s.onSuccess?(t.options.onSuccess==null||t.options.onSuccess(t.currentResult.data),t.options.onSettled==null||t.options.onSettled(t.currentResult.data,null)):s.onError&&(t.options.onError==null||t.options.onError(t.currentResult.error),t.options.onSettled==null||t.options.onSettled(void 0,t.currentResult.error)),s.listeners&&t.listeners.forEach(function(c){c(t.currentResult)}),s.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})})},r}(ve);function Qe(e,r){return r.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&r.retryOnMount===!1)}function H(e,r){return Qe(e,r)||e.state.dataUpdatedAt>0&&U(e,r,r.refetchOnMount)}function U(e,r,i){if(r.enabled!==!1){var o=typeof i=="function"?i(e):i;return o==="always"||o!==!1&&T(e,r)}return!1}function X(e,r,i,o){return i.enabled!==!1&&(e!==r||o.enabled===!1)&&(!i.suspense||e.state.status!=="error")&&T(e,i)}function T(e,r){return e.isStaleByTime(r.staleTime)}function Ie(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var Ee=S.createContext(Ie()),we=function(){return S.useContext(Ee)};function Fe(e,r,i){return typeof r=="function"?r.apply(void 0,i):typeof r=="boolean"?r:!!e}function Ce(e,r){var i=S.useRef(!1),o=S.useState(0),s=o[1],t=ye(),c=we(),l=t.defaultQueryObserverOptions(e);l.optimisticResults=!0,l.onError&&(l.onError=k.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=k.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=k.batchCalls(l.onSettled)),l.suspense&&(typeof l.staleTime!="number"&&(l.staleTime=1e3),l.cacheTime===0&&(l.cacheTime=1)),(l.suspense||l.useErrorBoundary)&&(c.isReset()||(l.retryOnMount=!1));var n=S.useState(function(){return new r(t,l)}),u=n[0],d=u.getOptimisticResult(l);if(S.useEffect(function(){i.current=!0,c.clearReset();var m=u.subscribe(k.batchCalls(function(){i.current&&s(function(v){return v+1})}));return u.updateResult(),function(){i.current=!1,m()}},[c,u]),S.useEffect(function(){u.setOptions(l,{listeners:!1})},[l,u]),l.suspense&&d.isLoading)throw u.fetchOptimistic(l).then(function(m){var v=m.data;l.onSuccess==null||l.onSuccess(v),l.onSettled==null||l.onSettled(v,null)}).catch(function(m){c.clearReset(),l.onError==null||l.onError(m),l.onSettled==null||l.onSettled(void 0,m)});if(d.isError&&!c.isReset()&&!d.isFetching&&Fe(l.suspense,l.useErrorBoundary,[d.error,u.getCurrentQuery()]))throw d.error;return l.notifyOnChangeProps==="tracked"&&(d=u.trackResult(d,l)),d}function Z(e,r,i){var o=be(e,r,i);return Ce(o,Ne)}const tt=e=>{const{className:r,shadow:i,flush:o,resetSidePaddings:s,border:t,dashed:c,stretch:l,rounded:n,utilityP:u,utilityPY:d,utilityPX:m,children:v}=e;return a.jsx("div",{className:O("card",r&&r,{"shadow-sm":i,"card-flush":o,"card-px-0":s,"card-bordered":t,"card-dashed":c},l&&`card-${l}`,u&&`p-${u}`,m&&`px-${m}`,d&&`py-${d}`,n&&`card-${n}`),children:v})};var Oe=xe,Ue=Re,Pe=Se,Te={formats:Pe,parse:Ue,stringify:Oe};const C=ge(Te);function Ae(e){return f.createContext(e)}function I(e){return e!=null&&e!==""}function Y(e){const r=C.stringify(e,{filter:["page","items_per_page"],skipNulls:!0}),i=C.stringify(e,{filter:["sort","order"],skipNulls:!0}),o=I(e.search)?C.stringify(e,{filter:["search"],skipNulls:!0}):"",s=e.filter?Object.entries(e.filter).filter(t=>I(t[1])).map(t=>`filter_${t[0]}=${t[1]}`).join("&"):"";return[r,i,o,s].filter(t=>t).join("&").toLowerCase()}function $e(e,r){return e?!0:!r||!r.length}function Le(e,r){return e?e.length>0&&e.length===r.length:!1}function Me(e,r,i){if(e)if(r.includes(e))i(r.filter(o=>o!==e));else{const o=[...r];o.push(e),i(o)}}function qe(e,r,i){if(e){r([]);return}!i||!i.length||r(i.filter(o=>o.id).map(o=>o.id))}function rt(e,r){const[i,o]=f.useState(e);return f.useEffect(()=>{const s=setTimeout(()=>{o(e)},r);return()=>{clearTimeout(s)}},[e,r]),i}const ee={page:1,items_per_page:10},te={state:ee,updateState:()=>{}},De={refetch:()=>{},isLoading:!1,query:""},P={selected:[],onSelect:()=>{},onSelectAll:()=>{},clearSelected:()=>{},setItemIdForUpdate:()=>{},isAllSelected:!1,disabled:!1},re={USERS_LIST:"users-list"},se="https://preview.keenthemes.com/theme-api/api",N=`${se}/user`,Be=`${se}/users/query`,Ve=e=>_.get(`${Be}?${e}`).then(r=>r.data),Ke=e=>_.get(`${N}/${e}`).then(r=>r.data).then(r=>r.data),We=e=>_.put(N,e).then(r=>r.data).then(r=>r.data),Ge=e=>_.post(`${N}/${e.id}`,e).then(r=>r.data).then(r=>r.data),st=e=>_.delete(`${N}/${e}`).then(()=>{}),at=e=>{const r=e.map(i=>_.delete(`${N}/${i}`));return _.all(r).then(()=>{})},ae=f.createContext(te),it=({children:e})=>{const[r,i]=f.useState(te.state),o=s=>{const t={...r,...s};i(t)};return a.jsx(ae.Provider,{value:{state:r,updateState:o},children:e})},ze=()=>f.useContext(ae),ie=Ae(De),nt=({children:e})=>{const{state:r}=ze(),[i,o]=f.useState(Y(r)),s=f.useMemo(()=>Y(r),[r]);f.useEffect(()=>{i!==s&&o(s)},[s]);const{isFetching:t,refetch:c,data:l}=Z(`${re.USERS_LIST}-${i}`,()=>Ve(i),{cacheTime:0,keepPreviousData:!0,refetchOnWindowFocus:!1});return a.jsx(ie.Provider,{value:{isLoading:t,refetch:c,response:l,query:i},children:e})},Q=()=>f.useContext(ie),He=()=>{const{response:e}=Q();return e?(e==null?void 0:e.data)||[]:[]},ot=()=>{const e={links:[],...ee},{response:r}=Q();return!r||!r.payload||!r.payload.pagination?e:r.payload.pagination},lt=()=>{const{isLoading:e}=Q();return e},ne=f.createContext(P),ct=({children:e})=>{const[r,i]=f.useState(P.selected),[o,s]=f.useState(P.itemIdForUpdate),{isLoading:t}=Q(),c=He(),l=f.useMemo(()=>$e(t,c),[t,c]),n=f.useMemo(()=>Le(c,r),[c,r]);return a.jsx(ne.Provider,{value:{selected:r,itemIdForUpdate:o,setItemIdForUpdate:s,disabled:l,isAllSelected:n,onSelect:u=>{Me(u,r,i)},onSelectAll:()=>{qe(n,i,c)},clearSelected:()=>{i([])}},children:e})},A=()=>f.useContext(ne),Xe=()=>{const e={borderRadius:"0.475rem",boxShadow:"0 0 50px 0 rgb(82 63 105 / 15%)",backgroundColor:"#fff",color:"#7e8299",fontWeight:"500",margin:"0",width:"auto",padding:"1rem 2rem",top:"calc(50% - 2rem)",left:"calc(50% - 4rem)"};return a.jsx("div",{style:{...e,position:"absolute",textAlign:"center"},children:"Processing..."})},Ye=()=>{const{setItemIdForUpdate:e}=A();return a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"fw-bolder",children:"Add User"}),a.jsx("div",{className:"btn btn-icon btn-sm btn-active-icon-primary","data-kt-users-modal-action":"close",onClick:()=>e(void 0),style:{cursor:"pointer"},children:a.jsx(_e,{iconName:"cross",className:"fs-1"})})]})},j={avatar:"avatars/300-6.jpg",position:"Art Director",role:"Administrator",name:"",email:""},Je=je().shape({email:G().email("Wrong email format").min(3,"Minimum 3 symbols").max(50,"Maximum 50 symbols").required("Email is required"),name:G().min(3,"Minimum 3 symbols").max(50,"Maximum 50 symbols").required("Name is required")}),J=({user:e,isUserLoading:r})=>{const{setItemIdForUpdate:i}=A(),{refetch:o}=Q(),[s]=f.useState({...e,avatar:e.avatar||j.avatar,role:e.role||j.role,position:e.position||j.position,name:e.name||j.name,email:e.email||j.email}),t=u=>{u&&o(),i(void 0)},c=z("media/svg/avatars/blank.svg"),l=z(`media/${s.avatar}`),n=ke({initialValues:s,validationSchema:Je,onSubmit:async(u,{setSubmitting:d})=>{d(!0);try{I(u.id)?await Ge(u):await We(u)}catch(m){console.error(m)}finally{d(!0),t(!0)}}});return a.jsxs(a.Fragment,{children:[a.jsxs("form",{id:"kt_modal_add_user_form",className:"form",onSubmit:n.handleSubmit,noValidate:!0,children:[a.jsxs("div",{className:"d-flex flex-column scroll-y me-n7 pe-7",id:"kt_modal_add_user_scroll","data-kt-scroll":"true","data-kt-scroll-activate":"{default: false, lg: true}","data-kt-scroll-max-height":"auto","data-kt-scroll-dependencies":"#kt_modal_add_user_header","data-kt-scroll-wrappers":"#kt_modal_add_user_scroll","data-kt-scroll-offset":"300px",children:[a.jsxs("div",{className:"fv-row mb-7",children:[a.jsx("label",{className:"d-block fw-bold fs-6 mb-5",children:"Avatar"}),a.jsx("div",{className:"image-input image-input-outline","data-kt-image-input":"true",style:{backgroundImage:`url('${c}')`},children:a.jsx("div",{className:"image-input-wrapper w-125px h-125px",style:{backgroundImage:`url('${l}')`}})})]}),a.jsxs("div",{className:"fv-row mb-7",children:[a.jsx("label",{className:"required fw-bold fs-6 mb-2",children:"Full Name"}),a.jsx("input",{placeholder:"Full name",...n.getFieldProps("name"),type:"text",name:"name",className:O("form-control form-control-solid mb-3 mb-lg-0",{"is-invalid":n.touched.name&&n.errors.name},{"is-valid":n.touched.name&&!n.errors.name}),autoComplete:"off",disabled:n.isSubmitting||r}),n.touched.name&&n.errors.name&&a.jsx("div",{className:"fv-plugins-message-container",children:a.jsx("div",{className:"fv-help-block",children:a.jsx("span",{role:"alert",children:n.errors.name})})})]}),a.jsxs("div",{className:"fv-row mb-7",children:[a.jsx("label",{className:"required fw-bold fs-6 mb-2",children:"Email"}),a.jsx("input",{placeholder:"Email",...n.getFieldProps("email"),className:O("form-control form-control-solid mb-3 mb-lg-0",{"is-invalid":n.touched.email&&n.errors.email},{"is-valid":n.touched.email&&!n.errors.email}),type:"email",name:"email",autoComplete:"off",disabled:n.isSubmitting||r}),n.touched.email&&n.errors.email&&a.jsx("div",{className:"fv-plugins-message-container",children:a.jsx("span",{role:"alert",children:n.errors.email})})]}),a.jsxs("div",{className:"mb-7",children:[a.jsx("label",{className:"required fw-bold fs-6 mb-5",children:"Role"}),a.jsx("div",{className:"d-flex fv-row",children:a.jsxs("div",{className:"form-check form-check-custom form-check-solid",children:[a.jsx("input",{className:"form-check-input me-3",...n.getFieldProps("role"),name:"role",type:"radio",value:"Administrator",id:"kt_modal_update_role_option_0",checked:n.values.role==="Administrator",disabled:n.isSubmitting||r}),a.jsxs("label",{className:"form-check-label",htmlFor:"kt_modal_update_role_option_0",children:[a.jsx("div",{className:"fw-bolder text-gray-800",children:"Administrator"}),a.jsx("div",{className:"text-gray-600",children:"Best for business owners and company administrators"})]})]})}),a.jsx("div",{className:"separator separator-dashed my-5"}),a.jsx("div",{className:"d-flex fv-row",children:a.jsxs("div",{className:"form-check form-check-custom form-check-solid",children:[a.jsx("input",{className:"form-check-input me-3",...n.getFieldProps("role"),name:"role",type:"radio",value:"Developer",id:"kt_modal_update_role_option_1",checked:n.values.role==="Developer",disabled:n.isSubmitting||r}),a.jsxs("label",{className:"form-check-label",htmlFor:"kt_modal_update_role_option_1",children:[a.jsx("div",{className:"fw-bolder text-gray-800",children:"Developer"}),a.jsx("div",{className:"text-gray-600",children:"Best for developers or people primarily using the API"})]})]})}),a.jsx("div",{className:"separator separator-dashed my-5"}),a.jsx("div",{className:"d-flex fv-row",children:a.jsxs("div",{className:"form-check form-check-custom form-check-solid",children:[a.jsx("input",{className:"form-check-input me-3",...n.getFieldProps("role"),name:"role",type:"radio",value:"Analyst",id:"kt_modal_update_role_option_2",checked:n.values.role==="Analyst",disabled:n.isSubmitting||r}),a.jsxs("label",{className:"form-check-label",htmlFor:"kt_modal_update_role_option_2",children:[a.jsx("div",{className:"fw-bolder text-gray-800",children:"Analyst"}),a.jsx("div",{className:"text-gray-600",children:"Best for people who need full access to analytics data, but don't need to update business settings"})]})]})}),a.jsx("div",{className:"separator separator-dashed my-5"}),a.jsx("div",{className:"d-flex fv-row",children:a.jsxs("div",{className:"form-check form-check-custom form-check-solid",children:[a.jsx("input",{className:"form-check-input me-3",...n.getFieldProps("role"),name:"role",type:"radio",value:"Support",id:"kt_modal_update_role_option_3",checked:n.values.role==="Support",disabled:n.isSubmitting||r}),a.jsxs("label",{className:"form-check-label",htmlFor:"kt_modal_update_role_option_3",children:[a.jsx("div",{className:"fw-bolder text-gray-800",children:"Support"}),a.jsx("div",{className:"text-gray-600",children:"Best for employees who regularly refund payments and respond to disputes"})]})]})}),a.jsx("div",{className:"separator separator-dashed my-5"}),a.jsx("div",{className:"d-flex fv-row",children:a.jsxs("div",{className:"form-check form-check-custom form-check-solid",children:[a.jsx("input",{className:"form-check-input me-3",...n.getFieldProps("role"),name:"role",type:"radio",id:"kt_modal_update_role_option_4",value:"Trial",checked:n.values.role==="Trial",disabled:n.isSubmitting||r}),a.jsxs("label",{className:"form-check-label",htmlFor:"kt_modal_update_role_option_4",children:[a.jsx("div",{className:"fw-bolder text-gray-800",children:"Trial"}),a.jsx("div",{className:"text-gray-600",children:"Best for people who need to preview content data, but don't need to make any updates"})]})]})})]})]}),a.jsxs("div",{className:"text-center pt-15",children:[a.jsx("button",{type:"reset",onClick:()=>t(),className:"btn btn-light me-3","data-kt-users-modal-action":"cancel",disabled:n.isSubmitting||r,children:"Discard"}),a.jsxs("button",{type:"submit",className:"btn btn-primary","data-kt-users-modal-action":"submit",disabled:r||n.isSubmitting||!n.isValid||!n.touched,children:[a.jsx("span",{className:"indicator-label",children:"Submit"}),(n.isSubmitting||r)&&a.jsxs("span",{className:"indicator-progress",children:["Please wait..."," ",a.jsx("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]})]})]}),(n.isSubmitting||r)&&a.jsx(Xe,{})]})},Ze=()=>{const{itemIdForUpdate:e,setItemIdForUpdate:r}=A(),i=I(e),{isLoading:o,data:s,error:t}=Z(`${re.USERS_LIST}-user-${e}`,()=>Ke(e),{cacheTime:0,enabled:i,onError:c=>{r(void 0),console.error(c)}});return e?!o&&!t&&s?a.jsx(J,{isUserLoading:o,user:s}):null:a.jsx(J,{isUserLoading:o,user:{id:void 0}})},ut=()=>(f.useEffect(()=>(document.body.classList.add("modal-open"),()=>{document.body.classList.remove("modal-open")}),[]),a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"modal fade show d-block",id:"kt_modal_add_user",role:"dialog",tabIndex:-1,"aria-modal":"true",children:a.jsx("div",{className:"modal-dialog modal-dialog-centered mw-650px",children:a.jsxs("div",{className:"modal-content",children:[a.jsx(Ye,{}),a.jsx("div",{className:"modal-body scroll-y mx-5 mx-xl-15 my-7",children:a.jsx(Ze,{})})]})})}),a.jsx("div",{className:"modal-backdrop fade show"})]}));export{tt as K,ct as L,re as Q,Xe as U,Q as a,A as b,rt as c,at as d,st as e,ot as f,lt as g,He as h,ee as i,it as j,nt as k,ut as l,Z as m,Fe as s,ze as u};