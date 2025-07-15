$(function(){

// User Register validation

	var $userRegister=$("#userRegister");

	$userRegister.validate({
		
		rules:{
			name:{
				required:true,
				lettersonly:true
			}
			,
			email: {
				required: true,
				space: true,
				email: true
			},
			mobileNumber: {
				required: true,
				space: true,
				numericOnly: true,
				minlength: 10,
				maxlength: 12

			},
			password: {
				required: true,
				space: true

			},
			confirmpassword: {
				required: true,
				space: true,
				equalTo: '#pass'

			},
			address: {
				required: true,
				all: true

			},

			city: {
				required: true,
				space: true

			},
			state: {
				required: true,


			},
			pincode: {
				required: true,
				space: true,
				numericOnly: true

			}, img: {
				required: true,
			}
			
		},
		messages:{
			name:{
				required:'name required',
				lettersonly:'invalid name'
			},
			email: {
				required: 'email name must be required',
				space: 'space not allowed',
				email: 'Invalid email'
			},
			mobileNumber: {
				required: 'mob no must be required',
				space: 'space not allowed',
				numericOnly: 'invalid mob no',
				minlength: 'min 10 digit',
				maxlength: 'max 12 digit'
			},

			password: {
				required: 'password must be required',
				space: 'space not allowed'

			},
			confirmpassword: {
				required: 'confirm password must be required',
				space: 'space not allowed',
				equalTo: 'password mismatch'

			},
			address: {
				required: 'address must be required',
				all: 'invalid'

			},

			city: {
				required: 'city must be required',
				space: 'space not allowed'

			},
			state: {
				required: 'state must be required',
				space: 'space not allowed'

			},
			pincode: {
				required: 'pincode must be required',
				space: 'space not allowed',
				numericOnly: 'invalid pincode'

			},
			img: {
				required: 'image required',
			}
		}
	})
	
	// Add custom JavaScript if needed for interactive features, like form validation or dynamic content loading
	$(document).ready(function() {
	    // Example: Smooth scrolling to sections
	    $('a.nav-link').on('click', function(e) {
	        if (this.hash !== "") {
	            e.preventDefault();
	            $('html, body').animate({
	                scrollTop: $(this.hash).offset().top
	            }, 800);
	        }
	    });
	});

	document.addEventListener("DOMContentLoaded", function () {
	    // Handle Buy buttons
	    const buyButtons = document.querySelectorAll(".btn-buy");

	    buyButtons.forEach(button => {
	        button.addEventListener("click", function () {
	            const product = this.getAttribute("data-product-name");
				Swal.fire({
				  icon: 'success',
				  title: `${product} added to cart!`,
				  showConfirmButton: false,
				  timer: 1500
				});
	        });
	    });

	    // Future interactions can go here
	});

	
// Orders Validation

var $orders=$("#orders");

$orders.validate({
		rules:{
			firstName:{
				required:true,
				lettersonly:true
			},
			lastName:{
				required:true,
				lettersonly:true
			}
			,
			email: {
				required: true,
				space: true,
				email: true
			},
			mobileNo: {
				required: true,
				space: true,
				numericOnly: true,
				minlength: 10,
				maxlength: 12

			},
			address: {
				required: true,
				all: true

			},

			city: {
				required: true,
				space: true

			},
			state: {
				required: true,


			},
			pincode: {
				required: true,
				space: true,
				numericOnly: true

			},
			paymentType:{
			required: true
			}
		},
		messages:{
			firstName:{
				required:'first required',
				lettersonly:'invalid name'
			},
			lastName:{
				required:'last name required',
				lettersonly:'invalid name'
			},
			email: {
				required: 'email name must be required',
				space: 'space not allowed',
				email: 'Invalid email'
			},
			mobileNo: {
				required: 'mob no must be required',
				space: 'space not allowed',
				numericOnly: 'invalid mob no',
				minlength: 'min 10 digit',
				maxlength: 'max 12 digit'
			}
		   ,
			address: {
				required: 'address must be required',
				all: 'invalid'

			},

			city: {
				required: 'city must be required',
				space: 'space not allowed'

			},
			state: {
				required: 'state must be required',
				space: 'space not allowed'

			},
			pincode: {
				required: 'pincode must be required',
				space: 'space not allowed',
				numericOnly: 'invalid pincode'

			},
			paymentType:{
			required: 'select payment type'
			}
		}	
})

// Reset Password Validation

var $resetPassword=$("#resetPassword");

$resetPassword.validate({
		
		rules:{
			password: {
				required: true,
				space: true

			},
			confirmPassword: {
				required: true,
				space: true,
				equalTo: '#pass'

			}
		},
		messages:{
		   password: {
				required: 'password must be required',
				space: 'space not allowed'

			},
			confirmpassword: {
				required: 'confirm password must be required',
				space: 'space not allowed',
				equalTo: 'password mismatch'

			}
		}	
})
	
})

// Theme toggle logic
document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle Theme";
    toggleBtn.className = "theme-toggle";
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});


// Allow only letters
jQuery.validator.addMethod("lettersonly", function(value, element) {
    return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
}, "Letters only please");

// Disallow spaces
jQuery.validator.addMethod("space", function(value, element) {
    return value.trim() === value;
}, "No leading/trailing spaces");

// Numeric only
jQuery.validator.addMethod("numericOnly", function(value, element) {
    return this.optional(element) || /^[0-9]+$/.test(value);
}, "Numbers only");

// Allow all characters (used loosely here, you may define stricter rule as needed)
jQuery.validator.addMethod("all", function(value, element) {
    return this.optional(element) || value.length > 0;
}, "Invalid input");
