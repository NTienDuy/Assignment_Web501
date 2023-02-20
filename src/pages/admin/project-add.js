import { router, useEffect } from "@/lib";

const AdminProjectAddPage = () => {

    useEffect(() => {
        const form = document.querySelector("#form-add");
        const projectName = document.querySelector("#project-name");
        const projectAuthor = document.querySelector("#project-author");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); // disable reload

            const project = {
                name: projectName.value,
                author: projectAuthor.value,
            };

            projects.push(project);
            localStorage.setItem("projects", JSON.stringify(projects));
            router.navigate("/admin/projects");
        });
    });
    return `<div>
        <h1>Thêm dự án</h1>
        <form id="form-add">
            <input type="text" id="project-name" class="border"/>
            <input type="text" id="project-author" class="border"/>
            <button>Thêm</button>
        </form>
    </div>`;
};

export default AdminProjectAddPage;