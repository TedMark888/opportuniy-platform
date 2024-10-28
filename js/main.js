// To simulate job listings
const jobs = [
    { title: "Software Engineer", location: "Remote", salary: "$76k-$90k" },
    { title: "Marketing Specialist", location: "New York NY", salary: "50k-$80k"},
    { title : "UX Design", location: "San Francisco CA", salary: "$80k-$100k" }
];

//Populating job listings on the job listings page
document.addEventListener("DOMContentLoaded", () => {
    const jobListings = document.getElementById("job-listings");
    if (jobListings) {
        jobs.forEach(job => {
            const jobItem = document.createElement("li");
            jobItem.innerHTML = `<h3>$(job.title)<h3><p>$(job.location)</p><p>$(job.salary)</p>`;
            jobListings.appendChild(jobItem);
        });
    }

    //Handle posting of jobs in the employer dashboard
    const postJobBtn = ocument.getElementById("post-job-btn");
    if (postJobBtn) {
        postJobBtn.addEventListener("click", () => {
            const jobTitle = prompt("Enter Job Title");
            const jobLocation = prompt("Enter Job Location");
            const jobSalary = prompt("Enter Salary Range");
            alert(`Job posted: $(jobTitle) ($(JObLocation), $(jobSalary))`); 
        });
    }
});