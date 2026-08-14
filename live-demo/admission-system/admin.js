const SUPABASE_URL = "https://jcjvufdxmubmuzwgcbki.supabase.co";
const SUPABASE_KEY = "sb_publishable_Hqm5Foz0fHtvqePWq_JiUA_HCxLOS3y";

const client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);

async function loadStudents() {

    const { data, error } = await client
        .from("students")
        .select("*");

    if (error) {
        alert(error.message);
        return;
    }

    const tbody =
document.querySelector("#studentsTable tbody");
  tbody.innerHTML="";

    data.forEach(student => {

        tbody.innerHTML += `
        <tr>
            <td>
            <img src="${student.photo_url}"
            width="60"
            height="60"
            style="border-radius:50%;">
            </td>
            <td>${student.first_name} ${student.last_name}</td>
            <td>${student.phone}</td>
            <td>${student.email}</td>
            <td>${student.course}</td>
            <td>${student.cutoff}</td>
            <td>${student.maths}</td>
            <td>${student.physics}</td>
            <td>${student.chemistry}</td>

        </tr>
        `;

    });

}

loadStudents();