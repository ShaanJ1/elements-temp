<script lang="ts">
    const companyInfo = {
        founded: "2016",
        location: "Calgary, Alberta",
        mission: "To provide exceptional millwork solutions that blend craftsmanship, innovation, and sustainability."
    };

    const teamMembers = [
        {
            name: "John Doe",
            role: "Founder & CEO",
            image: "/images/team/john-doe.jpg"
        },
        // Add more team members as needed
    ];
</script>

<div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="text-center">
            <h1 class="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                About Elements Millwork
            </h1>
            <p class="mt-5 max-w-xl mx-auto text-xl text-gray-500">
                Crafting excellence in custom millwork and architectural elements
            </p>
        </div>

        <!-- Mission Statement -->
        <div class="mt-16">
            <div class="bg-gray-50 overflow-hidden rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                    <h2 class="text-3xl font-bold text-gray-900">Our Mission</h2>
                    <p class="mt-4 text-lg text-gray-500">{companyInfo.mission}</p>
                </div>
            </div>
        </div>

        <!-- Company Stats -->
        <div class="mt-16">
            <dl class="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dt class="text-sm font-medium text-gray-500 truncate">Years in Business</dt>
                        <dd class="mt-1 text-3xl font-semibold text-gray-900">
                            {new Date().getFullYear() - parseInt(companyInfo.founded)}
                        </dd>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dt class="text-sm font-medium text-gray-500 truncate">Projects Completed</dt>
                        <dd class="mt-1 text-3xl font-semibold text-gray-900">500+</dd>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dt class="text-sm font-medium text-gray-500 truncate">Client Satisfaction</dt>
                        <dd class="mt-1 text-3xl font-semibold text-gray-900">99%</dd>
                    </div>
                </div>
            </dl>
        </div>

        <!-- Values Section -->
        <div class="mt-16">
            <h2 class="text-3xl font-bold text-gray-900 text-center">Our Values</h2>
            <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div class="bg-white shadow-lg rounded-lg px-6 py-8">
                    <h3 class="text-xl font-bold text-gray-900">Quality</h3>
                    <p class="mt-4 text-gray-500">Delivering exceptional craftsmanship in every project.</p>
                </div>
                <div class="bg-white shadow-lg rounded-lg px-6 py-8">
                    <h3 class="text-xl font-bold text-gray-900">Innovation</h3>
                    <p class="mt-4 text-gray-500">Embracing new technologies and techniques.</p>
                </div>
                <div class="bg-white shadow-lg rounded-lg px-6 py-8">
                    <h3 class="text-xl font-bold text-gray-900">Sustainability</h3>
                    <p class="mt-4 text-gray-500">Committed to environmentally responsible practices.</p>
                </div>
            </div>
        </div>
    </div>
</div>