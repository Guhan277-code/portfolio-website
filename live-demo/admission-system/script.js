const SUPABASE_URL = "https://jcjvufdxmubmuzwgcbki.supabase.co";
const SUPABASE_KEY = "sb_publishable_Hqm5Foz0fHtvqePWq_JiUA_HCxLOS3y";

const client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
const dob=document.getElementById("dob");
const age=document.getElementById("age");
console.log(dob);
console.log(age);
dob.addEventListener("change",function(){
const birthDate=new Date(this.value);
const today=new Date();
let years=today.getFullYear()-birthDate.getFullYear();
const month=today.getMonth()-birthDate.getMonth();                                       
if(month<0||(month===0&&today.getDate()<birthDate.getDate())){                             
years--;
}
age.value=years;
});
const maths=document.getElementById("maths");
const physics=document.getElementById("physics");
const chemistry=document.getElementById("chemistry");
const cutoff=document.getElementById("cutoff");
function calculateCutoff(){
const mathsMark=parseFloat(maths.value)||0;
const physicsMark=parseFloat(physics.value)||0;
const chemistryMark=parseFloat(chemistry.value)||0;
const total=mathsMark+(physicsMark/2)+(chemistryMark/2);
cutoff.value=total.toFixed(2);
}
maths.addEventListener("input",calculateCutoff);
physics.addEventListener("input",calculateCutoff);
chemistry.addEventListener("input",calculateCutoff);
const marks=[maths,physics,chemistry];
marks.forEach(function(subject){
subject.addEventListener("input",function(){
if(this.value>100){
alert("Marks cannot be greater than 100");
this.value="";
}
if(this.value<0){
alert("Marks cannot be less than 0");
this.value="";
}
});
});
const form=document.getElementById("studentForm");
const submitBtn=document.getElementById("submitBtn");
form.addEventListener("submit", async function(event){
event.preventDefault();
submitBtn.disabled=true;
submitBtn.innerHTML="Submitting...";
if(!form.checkValidity()){
event.preventDefault();
alert("Please fill all the mandatory fields correctly.");
submitBtn.disabled=false;
submitBtn.innerHTML="Submit";
return;
}
const formData = new FormData(form);

const data = Object.fromEntries(formData.entries());
delete data.photo;
const photoFile = document.getElementById("photo").files[0];

const fileName = Date.now() + "-" + photoFile.name;

const { error: uploadError } = await client.storage
    .from("photos")
    .upload(fileName, photoFile);

if (uploadError) {
    alert("Photo upload failed!");
    submitBtn.disabled = false;
    submitBtn.innerHTML = "Submit";
    return;
}

const { data: photoData } = client.storage
    .from("photos")
    .getPublicUrl(fileName);

data.photo_url = photoData.publicUrl;
const { error } = await client
.from("students")
.insert([data]);

if (error) {
    alert("Error: " + error.message);
    submitBtn.disabled=false;
    submitBtn.innerHTML="Submit";
} else {

    await emailjs.send(
        "service_97mfoxb",
        "template_274qaad",
        {
            first_name: data.first_name,
            last_name: data.last_name,
            phone: data.phone,
            email: data.email,
            course: data.course,
            cutoff: data.cutoff
        }
    );

    alert("Admission submitted successfully!");
const applicationId =
"ADM" +
new Date().getFullYear() +
Math.floor(1000 + Math.random() * 9000);

localStorage.setItem("applicationId", applicationId);
    window.location.href = "success.html";
}
});