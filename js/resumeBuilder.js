	
function displayResumeItems() {
	bio.display();
	work.display();
	education.display();
	projects.display();
	$('#mapDiv').append(googleMap);
}
	
var bio = {
	name: "Brian Johnson",
	role: "Front End Web Developer",
	contacts: {
		mobile: "314-223-1953",
		email: "bmj@protonmail.com",
		github: "bmj76",	
		location: "St. Louis, MO",
		kik: "noriste" //to show that a custom contact type works
	},
	welcomeMessage: "20 years of IT and Development experience, and still learning new tricks....",
	skills: ["HTML","JavaScript","jQuery","System Design","Technical Architecture","C++"],
	biopic: "images/me.jpg",
	
	display: function () {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		var formattedContacts = [];
		//the following for loop checks for the contact types provided and allows custom contact types
		$.each(bio.contacts, function(key,value) {
			switch(key) {
				case "email":
					var formattedItem = HTMLemail.replace("%data%", value);
					formattedContacts.push(formattedItem);
				break;
				case "mobile":
					var formattedItem = HTMLmobile.replace("%data%", value);
					formattedContacts.push(formattedItem);
				break;
				case "location":
					var formattedItem = HTMLlocation.replace("%data%", value);
					formattedContacts.push(formattedItem);
				break;
				case "github":
					var formattedItem = HTMLgithub.replace("%data%", value);
					formattedContacts.push(formattedItem);
				break;
				case "twitter":
					var formattedItem = HTMLtwitter.replace("%data%", value);
					formattedContacts.push(formattedItem);
				break;
				default:
					var formattedItem = HTMLcontactGeneric.replace("%data%", value);
					var formattedItem = formattedItem.replace("%contact%", key);
					formattedContacts.push(formattedItem);
				break;
			}
		});
		
		if (bio.skills.length) {
			$("#header").append(HTMLskillsStart);
			
			var formattedSkills = [];
			for (var key in bio.skills) {
				var formattedItem = HTMLskills.replace("%data%", bio.skills[key]);
				formattedSkills.push(formattedItem);	
			}
			$("#skills").append(formattedSkills);
		}
		
		if (bio.biopic) {
			var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
			$('#header').prepend(formattedPic);
		}
		
		$("#header").prepend(formattedContacts);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedwelcomeMsg);
		$("#footerContacts").append(formattedContacts);

	},

	debug: function () {
		console.log(this);
	}
};

var education = {
	schools: [
		{
			name: "Webster University",
			location: "Webster Groves, MO",
			degree: "Master of Science",
			majors: ["Computer Science"],
			dates: "2013",
			url: "www.webster.edu"
		},
		{
			name: "Webster University",
			location: "St. Louis, MO",
			degree: "Bachelor of Science",
			majors: ["Computer Science","Distributed Systems"],
			dates: "2011",
			url: "www.webster.edu"		
		}
	],
	onlineCourses: [
		{
			title: "Front-End Web Developer",
			school: "Udacity",
			dates: "February 2017 - In Progress",
			url: "http://www.udacity.com"
		}
	],

	display: function() {
		$('#education').append(HTMLschoolStart);
		var formattedSchools = [];
		for (var key in education.schools) {
			var formattedItem = HTMLschoolName.replace("%data%",education.schools[key].name);
			formattedItem += HTMLschoolDegree.replace("%data%",education.schools[key].degree);
			formattedItem += HTMLschoolDates.replace("%data%",education.schools[key].dates);
			formattedItem += HTMLschoolLocation.replace("%data%",education.schools[key].location);
			for (var major in education.schools[key].majors) {
				formattedItem += HTMLschoolMajor.replace("%data%",education.schools[key].majors[major]);
			}
			formattedSchools.push(formattedItem);
			
		}

		$('.education-entry:last').append(formattedSchools);

		if (education.onlineCourses.length > 0) {
			$('#education').append(HTMLschoolStart);
			$('.education-entry:last').append(HTMLonlineClasses);
			var formattedOnlineCourses = [];
			for (var key in education.onlineCourses)
			{
				var formattedItem = HTMLonlineTitle.replace("%data%",education.onlineCourses[key].title);
				formattedItem += HTMLonlineSchool.replace("%data%",education.onlineCourses[key].school);
				formattedItem += HTMLonlineDates.replace("%data%",education.onlineCourses[key].dates);
				formattedItem += HTMLonlineURL.replace("%data%",education.onlineCourses[key].url);

				
				formattedOnlineCourses.push(formattedItem);
			}
		}

		$('.education-entry:last').append(formattedOnlineCourses);

	},

	debug: function() {
		console.log(this);
	}

};

var work = {
	jobs: [
		{
			employer: "AT&T",
			title: "Principal System Engineer",
			location: "St. Louis, MO",
			dates: "November 2016 - Present",
			descripton: "Responsible for Technical Design and Architecture of a large Enterprise Application.  Oversee releases, plan future work, write technical requirements, mentor developers."
		},
		{
			employer: "AT&T",
			title: "Senior System Engineer",
			location: "St. Louis, MO",
			dates: "July 2011 - November 2016",
			descripton: "Web Developer"
		},
		{
			employer: "AT&T",
			title: "Senior Technical Team Lead",
			location: "St. Louis, MO",
			dates: "May 2005 - July 2011",
			descripton: "Managed team of 12-20 to provide Tier 1 and Tier 2 Midrange Server support."
		},
		{
			employer: "Southwestern Bell, Inc.",
			title: "Systems Manager",
			location: "St. Louis, MO",
			dates: "December 1997 - May 2005",
			descripton: "Tier 3 Desktop Image Creation/Support"
		}

	],

	display: function() {
		$('#workExperience').append(HTMLworkStart);

		for (job in work.jobs) {
		
			var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].descripton);
			$(".work-entry:last").append(formattedDescription);
		}

		
	},

	debug: function() {
		console.log(this);
	}

};

var projects = {
	project: [
		{
			title: "Sample Project 1",
			dates: "2017",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
			images: ["images/Project1.png"]
		},
		{
			title: "Sample Project 2",
			dates: "2016",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
			images: ["images/Project2.png","images/Project2-1.png"]
		}
	],

	display: function () {
		for (key in projects.project) {
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[key].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.project[key].dates);
			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[key].description);
			$(".project-entry:last").append(formattedDescription);

			if (projects.project[key].images.length > 0) {
				for (image in projects.project[key].images) {
					var formattedImage = HTMLprojectImage.replace("%data%", projects.project[key].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}
		}
	},

	debug: function () {
		console.log(this);
	}
};

function locationizer (work_obj) {
	var locationArray = [];

	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0]. name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}


displayResumeItems();
