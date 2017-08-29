<template>
	<div class="msgs">
		<div class="form-item item-line">                 
		    <label>请选择银行</label>                 
		    <div class="pc-box">                     
		        <input type="hidden" name="bank_id" id="bankId" value="">                     
		        <span id="showBank" >点击这里选择银行</span>  
		    </div>             
		</div>
		<div class="container"></div>
	</div>
</template>
<script>
	//import IosSelect from '../../../static/js/iosSelect.js'
	//import IScroll from '../../../static/js/iscroll.js'
	import {data} from '../../../static/js/bank.js'
	export default{
		name: 'msgs',
		data:function(){
			return{

			}
		},
		components:{

		},
		mounted(){
			 var showBankDom = document.querySelector('#showBank');
		    var bankIdDom = document.querySelector('#bankId');
		    showBankDom.addEventListener('click', function () {
		        var bankId = showBankDom.dataset['id'];
		        var bankName = showBankDom.dataset['value'];

		        var bankSelect = new IosSelect(1, 
		            [data],
		            {
		                container: '.container',
		                title: '银行卡选择',
		                itemHeight: 50,
		                itemShowCount: 3,
		                oneLevelId: bankId,
		                callback: function (selectOneObj) {
		                    bankIdDom.value = selectOneObj.id;
		                    showBankDom.innerHTML = selectOneObj.value;
		                    showBankDom.dataset['id'] = selectOneObj.id;
		                    showBankDom.dataset['value'] = selectOneObj.value;
		                }
		        });
		    });	
		},
		methods:{
			showBank(){
				/*var showBankDom = document.querySelector('#showBank');
		    	var bankIdDom = document.querySelector('#bankId');
		    	var bankId = showBankDom.dataset['id'];
		        var bankName = showBankDom.dataset['value'];

		        var bankSelect = new IosSelect(1, 
		           [data],
		            {
		                container: '.container',
		                title: '银行卡选择',
		                itemHeight: 50,
		                itemShowCount: 3,
		                oneLevelId: bankId,
		                callback: function (selectOneObj) {
		                    bankIdDom.value = selectOneObj.id;
		                    showBankDom.innerHTML = selectOneObj.value;
		                    showBankDom.dataset['id'] = selectOneObj.id;
		                    showBankDom.dataset['value'] = selectOneObj.value;
		                }
		        });*/
			}
		}
	}
</script>
<style lang='less' scoped>
	@import url('../../../static/css/iosSelect.css');
	.msgs{
		
	}
</style>
