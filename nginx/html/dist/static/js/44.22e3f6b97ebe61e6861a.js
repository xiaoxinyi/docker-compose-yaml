webpackJsonp([44],{1333:function(t,e,n){var i=n(1334);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(590)("68ccad4d",i,!0,{})},1334:function(t,e,n){(t.exports=n(589)()).push([t.i,".delete-job-modal .delete-job-modal-info{height:60px;line-height:60px;text-align:center}.delete-job-modal .ivu-modal-header{border-bottom:0;padding:14px 30px}.delete-job-modal .ivu-modal-body{padding:0 16px}.delete-job-modal .ivu-modal-footer{border-top:0}",""])},1335:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s,o,a,r=n(305),l=n.n(r),c=n(306),d=n.n(c),p=n(307);e.default={data:function(){var n=this;return{jobId:"",jobList:[],allDepartments:[],allInitPermissions:[],allPermissions:[],deleteJobInfo:"",deleteJobModal:!1,columnsJob:[{title:"岗位名称",key:"name",align:"left"},{title:"部门",key:"departmentName",align:"left"},{title:"岗位描述",key:"description",align:"left"},{title:"操作",key:"action",align:"center",width:140,render:function(t,e){return t("div",[t("Button",{props:{type:"text",size:"large",icon:"edit"},on:{click:function(){n.editPosition(e.row)}}}),t("Button",{props:{type:"text",size:"large",icon:"android-delete"},on:{click:function(){n.deleteJobInfo=e.row.name,n.jobId=e.row.id,n.deleteJobModal=!0}}})])}}],allPositions:[]}},mounted:function(){this.getAllInitPermissions(),this.getAllPositions(),this.getAllDepartments()},methods:{getAllInitPermissions:(a=d()(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.S();case 2:(e=t.sent)&&200===e.code&&(this.allInitPermissions=e.data);case 4:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)}),formatAllInitPermissions:function(){this.allInitPermissions.forEach(function(t){t.checkAll=!1,t.disabled=!1,t.indeterminate=!1,t.permissionIds=[],t.checkboxAbledCount=0,t.functions.forEach(function(t){t.selected=!1,t.disabled=!1})})},getAllDepartments:(o=d()(l.a.mark(function t(){var n,e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.next=3,p.Q();case 3:(e=t.sent)&&200===e.code&&(e.data.forEach(function(t){var e={id:t.id,name:t.name,totalPermissions:t.total_permissions};n.push(e)}),this.allDepartments=n);case 5:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)}),getAllPositions:(s=d()(l.a.mark(function t(){var n,e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],t.next=3,p.T(0);case 3:(e=t.sent)&&200===e.code&&(e.data.forEach(function(t){var e={id:t.id,name:t.name,permissions:t.position_permissions,description:t.description,departmentName:t.department_name,departmentAttached:{id:t.department_id,name:t.department_name,permissions:t.department_permissions}};n.push(e)}),this.allPositions=n);case 5:case"end":return t.stop()}},t,this)})),function(){return s.apply(this,arguments)}),getCheckboxAbledCounts:function(){this.allInitPermissions.forEach(function(e){e.functions.forEach(function(t){t.disabled||(e.checkboxAbledCount+=1)})})},creatPosition:function(){this.getAllInitPermissions(),this.formatAllInitPermissions(),this.getCheckboxAbledCounts(),this.$router.push({name:"creatDepartment",params:{type:"creatPosition",allDepartments:this.allDepartments,allInitPermissions:this.allInitPermissions}})},editPosition:function(t){this.$router.push({name:"creatDepartment",params:{type:"editPosition",positionEdited:t,allDepartments:this.allDepartments,allInitPermissions:this.allInitPermissions}})},cancelDeleteJob:function(){this.deleteJobModal=!1},deleteJob:(i=d()(l.a.mark(function t(){var e;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.C(this.jobId);case 2:(e=t.sent)&&(200===e.code?this.$Message.success("删除成功"):405===e.code&&this.$Message.success("该岗位下存在员工，不可删除"),this.deleteJobModal=!1,this.getAllPositions());case 4:case"end":return t.stop()}},t,this)})),function(){return i.apply(this,arguments)})}}},1336:function(t,e){t.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"job-manage"},[n("Button",{attrs:{type:"primary"},on:{click:e.creatPosition}},[e._v("新建自定义岗位")]),e._v(" "),n("Table",{attrs:{stripe:"",columns:e.columnsJob,data:e.allPositions}}),e._v(" "),n("Modal",{staticClass:"delete-job-modal",attrs:{title:"岗位删除",width:"300"},model:{value:e.deleteJobModal,callback:function(t){e.deleteJobModal=t},expression:"deleteJobModal"}},[n("p",{staticClass:"delete-job-modal-info"},[e._v("你确定要将“"+e._s(e.deleteJobInfo)+"”岗位删除吗？")]),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("Button",{attrs:{type:"primary"},on:{click:e.deleteJob}},[e._v("确定")]),e._v(" "),n("Button",{staticStyle:{"margin-left":"30px","margin-right":"56px"},attrs:{type:"ghost"},on:{click:e.cancelDeleteJob}},[e._v("取消")])],1)])],1)},staticRenderFns:[]}},1411:function(t,e,n){var i=n(304)(n(1335),n(1336),function(t){n(1333)},null,null);t.exports=i.exports}});