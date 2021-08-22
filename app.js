// signin.html
function signin() {

    let email = document.getElementById("user_email").value
    let password = document.getElementById("user_pass").value

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            alert("User Successfully Loged In")
            window.location.href = 'rest.html'

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("email or password is wrong")
        })
}

// signup.html
function signup() {
    let email = document.getElementById("user_email_up").value
    let password = document.getElementById("user_password_up").value

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            alert("User successfully added")
            window.location.href = "login.html"
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Error Occurred")
        });
}

// data added by admin to database
var i = 0
var j = 0
var k = 0
function add_data() {
   
    let item_name = document.getElementById("validationCustom01").value
    let price = document.getElementById("validationCustom02").value
    let food_image = document.getElementById("validationCustom04").value

    // food type
    let a = document.getElementById("validationCustom03");
    let selected_food = a.options[a.selectedIndex].text;

    // food delivery type
    let b = document.getElementById("validationCustom05");
    let delivery_type = b.options[b.selectedIndex].text;

    // making object to send on database
    var obj = {
        "item_name": item_name,
        "price": price,
        "food_type": selected_food,
        "image": food_image,
        "delivery_type": delivery_type
    }

    // condition to check so add to that path in firebase database
    if (selected_food === "chinese") {
        i += 1
        firebase.database().ref("categories/chinese/dish" + i).set(obj)
    }
    else if (selected_food === "pakistani") {
        j += 1
        firebase.database().ref("categories/pakistani/dish" + j).set(obj)
    }
    else if (selected_food === "indian") {
        k += 1
        firebase.database().ref("categories/indian/dish" + k).set(obj)
    }
}