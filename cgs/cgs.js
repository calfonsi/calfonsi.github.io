function $(selector){
	var el;
	if (typeof selector === "string" || selector instanceof String) {
		el = document.querySelector(selector);
	} else {
		el = selector;
	}
	const self = {
		//element: document.querySelector(el),
		element: el,
		
		attr:(name, value) => {
			if(value == null){
				self.element.getAttribute(name);
			} else{
				self.element.setAttribute(name, value);
			}
		},
		
		hide:()=>{
			self.element.style.display = "none";
		},
		show:()=>{
			self.element.style.display = "block";
		},
		toggle:()=>{
			if(self.element.style.display == "none"){
				self.element.style.display = "block";
			} else {
				self.element.style.display = "none";
			}
		},
		val:(value)=> {
			if(value == null){
				return self.element.value;
			} else {
				self.element.value = value;
			}
		},
		html:(value) => {
			if(value == null){
				return self.element.innerHTML;
			} else {
				self.element.innerHTML = value;
			}
		},
		append:(value)=> {
			if(value == null){
				self.element.innerHTML;
			} else {
				self.element.innerHTML += value;
			}
		},
		prepend:(value)=> {
			if(value == null){
				self.element.innerHTML;
			} else {
				self.element.innerHTML = value + self.element.innerHTML;
			}
		},
		remove:(value)=> {
			self.element.remove();
		},
		
		each:(fn) => {
			elements = document.querySelectorAll(selector);
			for (var i = 0; i < elements.length; i++){
				fn(elements[i]);
			}
		},
		
		on:(event, callback) => {
			self.element.addEventListener(event, callback);
		}
	}
	return self;
}

var cgt = "CG_AMF_No_Offer.png, CG_CLIP_Credit_Line_Decrease.png, CG_CLIP_Credit_Line_Increase.png, CG_CLIP_Declined_Objection_Page_1.png, CG_CLIP_Declined_Objection_Page_2.png, CG_CLIP_Declined_Objection_Page_3.png, CG_CLIP_Declined_Objection_Page_4.png, CG_Cash_Advance_Limit.png, CG_Dispute_Pending_Transactions.png, CG_Income_Collection.png, CG_Interest_Waiver_and_Positioning_ADB.png, CG_Lower_APR.png, CG_No_Payoff_Amount_in_IVR.png, CG_OTB_Hold.png, CG_OTB_Hold_Capital_One_is-my_Bank.png, CG_OTB_Hold_Difficult_Conversation.png, CG_OTB_Hold_plus_Handling_Objections.png, CG_PDF_No_Offer.png, CG_Payments.png, CG_Residual_Interest.png";

var cgti = cgt.split(', ');
for (i = 0; i < cgti.length; i++) {
	$('#cg_img').append('<img src="'+cgti[i]+'" id="'+cgti[i].replace('.png','')+'" />');
	
}


