export const blogPosts = [
  {
    id: 1,
    slug: "the-art-of-feature-engineering",
    title: "The Art of Feature Engineering in Machine Learning",
    date: "October 15, 2024",
    categories: ["Technical", "Data Science", "Machine Learning"],
    excerpt: "Feature engineering is often the difference between a mediocre model and an exceptional one. In this post, I explore the key techniques that can transform your raw data into powerful predictive features.",
    image: "/images/blog/feature-engineering.jpg",
    content: `
Feature engineering is often described as the art and science of machine learning. While algorithms and hyperparameter tuning get a lot of attention, the quality of your features can make or break your model's performance. After working on numerous data science projects, I've come to appreciate that feature engineering is where domain knowledge meets statistical intuition.

## The Foundation: Understanding Your Data

Before diving into feature creation, you need to deeply understand your dataset. This means not just running df.describe() and calling it a day, but really exploring the distributions, relationships, and quirks of your data. I always start with comprehensive exploratory data analysis (EDA), creating visualizations to understand how variables interact and where the signal might be hiding.

## Feature Scaling: Getting Everyone on the Same Page

One of the first steps in feature engineering is scaling. When you have features with vastly different ranges—say, age (0-100) and income (0-1,000,000)—many algorithms will give undue weight to the larger-scale features. I typically use StandardScaler for most cases, which normalizes features to have zero mean and unit variance. However, for tree-based models like Random Forest or XGBoost, scaling is less critical since these algorithms make decisions based on feature splits rather than distances.

## Encoding Categorical Variables

Categorical variables require special attention. For ordinal categories with inherent order (like "low," "medium," "high"), label encoding works well. But for nominal categories, one-hot encoding is usually the way to go—though watch out for high-cardinality features that can explode your feature space. I've found target encoding particularly useful for categories with many levels, where you replace each category with the mean target value for that category. Just be careful about overfitting and use proper cross-validation.

## Creating Interaction Features

This is where things get creative. Interaction features capture relationships between variables that might not be apparent when looking at them individually. For example, in a house price prediction model, the interaction between square footage and location can be more predictive than either feature alone. I create these systematically using polynomial features, but also lean on domain knowledge to craft specific interactions that make logical sense.

## Handling Missing Data

Missing data is inevitable in real-world datasets. The simple approach is to drop rows or fill with mean/median, but you can do better. I often create a binary "is_missing" indicator variable, which can capture whether the missingness itself is informative. Sometimes the fact that a value is missing tells you something important about that observation.

## Feature Importance and Selection

Not all features you create will be useful. That's okay—part of the process is generating many candidates and then selecting the best ones. I use techniques like permutation importance, SHAP values, and correlation analysis to identify which features are actually contributing to model performance. Removing noisy or redundant features can often improve model performance by reducing overfitting.

The key to successful feature engineering is iteration. Create features, test them, analyze their impact, and refine. It's a process that combines creativity, domain expertise, and rigorous testing. And while it might not be as flashy as the latest deep learning architecture, it's often what separates good data scientists from great ones.
    `
  },
  {
    id: 2,
    slug: "from-pandas-to-polars",
    title: "From Pandas to Polars: Speeding Up Data Processing",
    date: "September 22, 2024",
    categories: ["Technical", "Data Science", "Python"],
    excerpt: "Polars is the new kid on the block in the Python data processing world, and it's making waves with its impressive performance. Here's what I learned from making the switch.",
    image: "/images/blog/polars.jpg",
    content: `
If you're a data scientist or analyst working with Python, you've almost certainly used Pandas. It's been the go-to library for data manipulation for over a decade. But there's a new player in town that's been getting a lot of attention: Polars. After spending the last few months experimenting with Polars, I want to share what I've learned about when and why you might want to make the switch.

## The Performance Difference is Real

Let's address the elephant in the room: Polars is fast. Really fast. In my benchmarks processing a 5GB CSV file, Polars was consistently 5-10x faster than Pandas for common operations like filtering, grouping, and aggregation. This isn't just marketing hype—the performance gains are substantial and noticeable in real-world workflows.

The speed comes from several design decisions. Polars is written in Rust, which gives it low-level control over memory and parallelization. It uses Apache Arrow as its memory format, which is more efficient than Pandas' NumPy-based approach. And perhaps most importantly, Polars employs lazy evaluation by default.

## Lazy Evaluation: Think Before You Compute

The lazy evaluation paradigm is probably the biggest conceptual shift when moving from Pandas to Polars. In Pandas, operations are executed immediately. When you write df.filter(...).groupby(...).agg(...), each step happens sequentially as you chain them.

Polars, on the other hand, builds a query plan first. It looks at all the operations you want to perform and optimizes the execution path before doing any actual computation. This means it can do things like predicate pushdown (applying filters as early as possible) and projection pushdown (only reading the columns you actually need).

In practice, this means you work with LazyFrames instead of DataFrames for most operations, then call .collect() when you actually need the results. It takes some getting used to, but once you embrace it, you start thinking about your data transformations more holistically.

## The API: Familiar Yet Different

If you know Pandas, picking up Polars isn't too difficult—but there are definitely differences. The Polars API is more explicit and, in my opinion, more consistent. For example, instead of Pandas' various ways to select columns (df['col'], df.col, df[['col1', 'col2']]), Polars uses a unified .select() method.

The expression API in Polars is particularly elegant. Instead of writing df.groupby('category')['value'].sum(), you write df.groupby('category').agg(pl.col('value').sum()). It's more verbose, but also more explicit about what's happening and easier to compose complex operations.

## When to Use Polars vs Pandas

So should you switch everything to Polars? Not necessarily. Here's my current thinking:

**Use Polars when:**
- You're working with large datasets (multi-GB)
- Performance is a bottleneck in your pipeline
- You're building data processing pipelines that benefit from query optimization
- You're starting a new project and can learn the API

**Stick with Pandas when:**
- You're working with small datasets where performance doesn't matter
- You're collaborating with a team that's deeply invested in Pandas
- You need specific functionality that's only in Pandas
- You're doing exploratory analysis where the interactive feel of Pandas is beneficial

## The Ecosystem Consideration

One challenge with Polars is that the ecosystem isn't as mature. Many libraries expect Pandas DataFrames as input. The good news is that converting between Pandas and Polars is straightforward—you can use .to_pandas() and pl.from_pandas() as needed. But it does add some friction.

That said, the Polars ecosystem is growing rapidly. More libraries are adding native Polars support, and the community is active and helpful.

## My Verdict

After several months of using both libraries, I find myself reaching for Polars more and more, especially for production data pipelines. The performance benefits are too significant to ignore, and the API has grown on me. That said, Pandas isn't going anywhere, and there's real value in knowing both tools and using the right one for the job.

If you haven't tried Polars yet, I encourage you to give it a shot on your next project. Start small, maybe with a single data processing script, and see how it feels. The performance gains might just win you over.
    `
  },
  {
    id: 3,
    slug: "my-journey-into-data-science",
    title: "My Journey into Data Science: From Biology to Big Data",
    date: "August 30, 2024",
    categories: ["Personal", "Career"],
    excerpt: "How I transitioned from studying biology at Grinnell College to working as a data scientist at Argonne National Laboratory, and what I learned along the way.",
    image: "/images/blog/journey.jpg",
    content: `
When I started at Grinnell College as a Biology major, I never imagined I'd end up as a data scientist. My path from studying cellular processes to analyzing vehicle trends and building machine learning models has been unexpected, challenging, and incredibly rewarding. Here's how it happened and what I learned along the way.

## The Unexpected Introduction

My first encounter with data science came through a statistics course I took to fulfill a requirement. I'll be honest—I wasn't excited about it at first. But something clicked when we started working with real datasets. I loved the detective work of exploratory data analysis, the satisfaction of uncovering patterns, and the power of using data to answer questions.

What really hooked me was a project analyzing ecological data. As a biology student, I was used to designing experiments and collecting data in the lab. But this was different—we were finding insights in data that already existed, using statistical methods to reveal patterns that weren't immediately obvious. It felt like I was using a different kind of microscope to see things others couldn't see.

## The Decision to Double Major

Adding a Statistics major to my Biology degree wasn't an easy decision. It meant extra classes, summer sessions, and juggling two very different sets of requirements. But I couldn't shake the feeling that this combination was special. Biology gave me domain knowledge and scientific thinking, while statistics gave me the tools to work with data rigorously.

Looking back, that decision to double major was probably the best academic choice I made. The intersection of these fields is where some of the most exciting work happens—whether it's in healthcare analytics, environmental modeling, or computational biology. Having that biological intuition alongside statistical rigor has been invaluable in my work.

## Learning to Code: The Steep Curve

Here's something they don't tell you enough: learning to code for data science is hard. Really hard. I spent countless nights debugging R scripts, wrestling with Python syntax, and trying to understand why my visualizations looked nothing like what I intended.

My first big coding project was building an R package for optimizing group assignments. It was way more complex than anything I'd attempted before. I learned about package structure, documentation, testing, and version control—all while trying to implement the actual algorithm. There were moments when I wanted to give up, when the error messages made no sense and Stack Overflow seemed to speak a foreign language.

But persistence pays off. Each bug I fixed taught me something new. Each successful script boosted my confidence. Gradually, coding shifted from feeling like an obstacle to feeling like a tool I could wield effectively.

## The SULI Experience

Landing the SULI Data Scientist position at Argonne National Laboratory felt like a huge validation. Here was a chance to apply everything I'd learned to real-world problems at a world-class research institution. The work has been exactly the kind of challenge I craved—complex datasets, interesting questions, and the opportunity to make a real impact.

One of my main projects involves analyzing vehicle trends, which is far removed from the biology I started with. But the scientific method is the same: ask good questions, design sound analyses, check your assumptions, and communicate your findings clearly. The tools have changed, but the fundamental approach to understanding the world through data remains constant.

## Lessons for Anyone Making a Similar Transition

If you're considering a transition into data science from another field, here's what I wish someone had told me:

**Your domain knowledge is an asset, not a liability.** Data science isn't just about knowing algorithms—it's about asking the right questions and interpreting results in context. Your background gives you perspective that pure computer science majors might lack.

**Embrace the discomfort of being a beginner.** There's a lot to learn, and it's okay to not know things. I still Google basic syntax regularly. What matters is that you keep learning and building.

**Projects matter more than perfect credentials.** My R package, my analysis projects, my Sankey diagrams—these tangible demonstrations of what I could do mattered more in interviews than my GPA.

**Community is everything.** Whether it's professors who believed in me, classmates who helped debug my code, or online communities that answered my questions, I couldn't have done this alone.

## Looking Forward

I'm still early in my data science journey, and there's so much more to learn. I want to dive deeper into machine learning, get better at Python, maybe learn some cloud computing. The field is evolving so rapidly that staying current is a constant challenge.

But that's also what makes it exciting. Every project is an opportunity to learn something new, to push my skills a bit further. Whether I'm building a neural network or creating a visualization that makes complex data accessible, I'm using my unique combination of biology, statistics, and data science to understand and communicate insights.

To anyone else contemplating a transition into data science: yes, it's challenging. Yes, there will be moments of doubt. But if you're curious, willing to learn, and persistent in the face of obstacles, you can absolutely make it happen. Your unique path is what will make you valuable in this field.
    `
  },
  {
    id: 4,
    slug: "cooking-with-data",
    title: "Cooking with Data: How I Use Analytics in the Kitchen",
    date: "July 18, 2024",
    categories: ["Personal", "Food"],
    excerpt: "Turns out, data science skills are surprisingly applicable to cooking Korean comfort food. Here's how I optimize recipes, track results, and approach cooking like an experiment.",
    image: "/images/blog/cooking.jpg",
    content: `
When I'm not wrangling datasets at work, you'll often find me in the kitchen cooking up Korean comfort food. As a data scientist who also happens to love cooking, I can't help but see the parallels between these two seemingly different activities. Both involve experimentation, iteration, and learning from results. Here's how I apply my data science mindset to my culinary adventures.

## Recipe Optimization: It's All About Experiments

When I first started cooking Korean food, I followed recipes exactly. But like any good data scientist, I soon started asking: can we do better? Can we optimize?

Take kimchi jjigae (kimchi stew), one of my absolute favorites. The traditional recipe is great, but I wanted to understand which variables actually mattered. So I started tracking: How old was the kimchi? How much gochugaru (Korean red pepper flakes) did I use? What protein did I add? How long did I simmer it?

I keep a simple spreadsheet where I log each attempt along with notes on how it turned out. Over time, patterns emerged. I learned that kimchi aged 2-3 weeks gives the best balance of tang and flavor. That adding a spoonful of gochujang along with the kimchi itself deepens the flavor complexity. That simmering for at least 20 minutes is non-negotiable, but beyond 30 minutes doesn't add much.

This isn't just about being nerdy (though I won't deny that's part of it)—it's about creating reproducible results. Now when I make kimchi jjigae, I know exactly what to do to get that perfect bowl every time.

## Ingredient Substitutions: Understanding the Variables

Living in the US, I don't always have access to every Korean ingredient I need. Sometimes you have to substitute, and this is where understanding variables becomes crucial.

When I couldn't find Korean radish for dongchimi (water kimchi), I needed to understand what properties of the radish actually mattered. Was it the crunch? The sweetness? The water content? After some research and experimentation, I found that daikon radish works well because it shares those key properties.

I think of ingredients as features in a machine learning model. Some features are essential—you can't make bibimbap without rice, just like you can't build a regression model without a target variable. But other features can be swapped with alternatives that have similar properties. The key is understanding what role each ingredient plays.

## Timing and Temperature: The Parameters That Matter

In data science, hyperparameter tuning can make or break a model. In cooking, it's all about timing and temperature. I've learned to be precise about these parameters because they dramatically affect the outcome.

For example, when making Korean fried chicken, the oil temperature is critical. Too hot (above 350°F) and the outside burns before the inside cooks. Too cool (below 325°F) and you get greasy, soggy chicken. I use a thermometer religiously now, maintaining that sweet spot around 340°F.

I've also learned that resting time matters. Letting meat rest after cooking, letting dough rest before rolling, letting flavors meld in the refrigerator overnight—these aren't optional steps. They're like letting your model train for enough epochs. Rush it, and you won't get optimal results.

## Batch Processing and Meal Prep

One of my favorite applications of data science thinking to cooking is batch processing. Just like it's more efficient to process data in batches rather than one row at a time, it's more efficient to cook in batches.

Every Sunday, I do meal prep for the week. I'll cook a large batch of rice (enough for 5-6 meals), prep multiple proteins, and make several banchan (Korean side dishes). It's like running a pipeline—set it up once, and you get multiple outputs.

I track what I make each week and how quickly we consume it. This helps me optimize quantities and avoid food waste. If I notice that we always have leftover kongnamul muchim (seasoned bean sprouts) but run out of sigumchi namul (seasoned spinach), I adjust the ratios for next week.

## Failure Analysis: Learning from Kitchen Disasters

Not every experiment succeeds. I've oversalted soups, burned rice, and made stews that were somehow simultaneously too spicy and too bland. But just like in data science, failures are learning opportunities.

When something goes wrong, I try to understand why. Was it a problem with the "data" (ingredient quality)? Was it a process error (wrong cooking method)? Was it a parameter issue (wrong temperature or time)? By treating failures as debugging exercises rather than defeats, I improve faster.

I keep notes on what went wrong and what I learned. That time I tried to substitute fish sauce for anchovy stock in sundubu jjigae? Learned that they're not interchangeable—the flavor profiles are too different. That time I added the garlic too early and it burned? Learned that garlic is sensitive to high heat and should go in at the right moment.

## The Joy of Controlled Experimentation

What I love most about cooking is that it's a domain where I can experiment freely. In my professional work, experiments with data have to be carefully designed and justified. But in my kitchen? I can try that weird flavor combination or test a new technique just to see what happens.

Recently, I've been experimenting with fusion ideas—what happens if I use gochujang in pasta sauce? Can I make a Korean-style risotto with nurungji (scorched rice)? Some experiments are successful, some aren't, but each one teaches me something about how flavors and techniques work.

## Data Science Meets Comfort Food

At the end of the day, cooking is about more than optimization and experimentation. It's about comfort, connection, and culture. When I make my mom's doenjang jjigae recipe, I'm not trying to optimize it—I'm honoring a tradition and creating something that tastes like home.

But the data science mindset has made me a better, more intentional cook. I understand my ingredients better. I can troubleshoot problems more effectively. I can experiment with confidence because I'm tracking what works and what doesn't.

Plus, it's given my boyfriend and our pup Zoro some very delicious benefits. They're always willing participants in my culinary experiments, even when I'm testing my tenth iteration of yangnyeom chicken.

So whether you're analyzing datasets or analyzing flavors, the fundamental approach is the same: observe, hypothesize, test, learn, and iterate. And enjoy the process—whether your end result is a well-tuned model or a perfect bowl of bibimbap.
    `
  },
  {
    id: 5,
    slug: "visualizing-complexity-sankey-diagrams",
    title: "Visualizing Complexity: A Love Letter to Sankey Diagrams",
    date: "June 5, 2024",
    categories: ["Technical", "Data Science", "Visualization"],
    excerpt: "Sankey diagrams are my favorite way to visualize flow and relationships in complex systems. Here's why I love them and when you should use them in your own work.",
    image: "/images/blog/sankey.jpg",
    content: `
If you've spent any time looking at my portfolio, you might notice that I have a particular affinity for Sankey diagrams. There's something deeply satisfying about watching data flow through a well-designed Sankey—the way it reveals patterns, shows proportions, and makes complex relationships immediately understandable. Let me tell you why I'm a bit obsessed with this visualization technique and when you should consider using it.

## What Makes Sankey Diagrams Special

At their core, Sankey diagrams are flow diagrams where the width of the arrows is proportional to the flow rate. They're perfect for showing how things move through a system, how quantities are distributed, or how categories relate to each other across different dimensions.

What I love most is their ability to show not just relationships, but the magnitude of those relationships. A regular flow chart might show you that category A connects to categories B and C, but a Sankey shows you that 70% flows to B and only 30% to C. That proportional representation is incredibly powerful for understanding systems.

They're also beautiful. There's an aesthetic quality to a well-designed Sankey that goes beyond pure functionality. The flowing curves, the way colors blend and separate, the visual balance—it all contributes to a visualization that's as pleasing to look at as it is informative.

## When to Use Sankey Diagrams

Not every dataset deserves a Sankey diagram. Like any visualization technique, it has its sweet spot. Here's when I reach for a Sankey:

**Multi-stage Processes:** Sankeys excel at showing how things move through stages. Think customer journeys through a website, materials through a manufacturing process, or energy flows through a system. If you have stages and flows between them, Sankey might be your friend.

**Budget or Resource Allocation:** When you need to show how a budget gets divided and subdivided, or how resources get allocated across different categories and subcategories, Sankeys make the distribution immediately clear.

**Category Transitions:** If you're showing how items move between categories—like how users move between different states in an application, or how products flow through different market segments—Sankeys can reveal patterns that would be hidden in tables.

**Conservation Systems:** Any system where quantities are conserved (what goes in must come out) is a natural fit for Sankey diagrams. The fact that flows must balance makes the visualization inherently intuitive.

## When NOT to Use Sankey Diagrams

It's equally important to know when Sankeys aren't the right choice:

- **Too many nodes:** If you have dozens of categories, a Sankey becomes an unreadable mess. I generally try to keep it under 15-20 nodes total.
- **Non-sequential relationships:** If your data doesn't have a natural flow or sequence, forcing it into a Sankey often confuses rather than clarifies.
- **Precise values matter:** Sankeys are great for showing proportions and relative magnitudes, but if users need to read exact values, a table or bar chart might be better.
- **Multiple interconnected loops:** If everything connects to everything in complex ways, you'll end up with a tangled mess rather than clear flows.

## Building Effective Sankey Diagrams

Over time, I've developed some principles for creating Sankeys that actually communicate well:

**Start with the data structure:** Your data needs to be in a format that describes sources, targets, and values. Each row should represent one flow. Getting this structure right is half the battle.

**Choose colors meaningfully:** I use color to help track flows through the diagram. Often I'll color-code by the initial source category, so you can visually trace where things come from as they flow through the system.

**Order nodes thoughtfully:** The vertical order of your nodes matters. I try to arrange them so that the largest flows are relatively straight and the diagram doesn't have too many crossing lines.

**Add interactivity when possible:** Static Sankeys are fine, but interactive ones where you can hover to see exact values or click to highlight specific flows are much more powerful. I often use libraries like Plotly that make this easy.

**Provide context:** Label your nodes clearly, add a title that explains what's flowing, and include units. A beautiful diagram that people can't understand is useless.

## My Favorite Sankey Projects

I've built quite a few Sankey diagrams across different projects. One of my favorites was visualizing vehicle trends data, showing how different vehicle types distributed across regions and how that changed over time. The Sankey made it immediately obvious which vehicle types were dominant in which regions, something that would have been much harder to see in any other format.

Another memorable one was for my group assignment optimization project, where I visualized how students with different preferences got assigned to different groups. It helped validate that the algorithm was working as intended and made it easy to spot potential issues.

## Tools and Implementation

For creating Sankey diagrams, I primarily use Python with Plotly. The syntax is straightforward once you get your data in the right format. You define nodes with labels and colors, then specify the links between them with source, target, and value parameters. The width of each flow is automatically scaled based on the values you provide.

For web-based interactive versions, I've also used D3.js, though it has a steeper learning curve. The advantage is the fine-grained control over every aspect of the visualization.

In R, the networkD3 package provides good Sankey functionality, though I find the Python tools more flexible for complex customizations.

## The Future of Flow Visualization

As data gets more complex and systems become more interconnected, I think flow visualizations like Sankey diagrams will become increasingly important. They help us understand complex systems in an intuitive, visual way that our brains are wired to process.

I'm particularly excited about advances in interactive visualizations. Imagine Sankeys where you can drag nodes to reorder them, filter flows by clicking categories, or animate to show how flows change over time. Some of these capabilities exist now, but I think we'll see even more sophisticated approaches emerge.

## Why I Keep Coming Back

At the end of the day, I love Sankey diagrams because they make complexity comprehensible. In a world drowning in data, finding ways to communicate insights clearly is invaluable. When I show someone a Sankey diagram and see their eyes light up with understanding—"Oh, now I see it!"—that's the magic of good data visualization.

So yes, I might be a bit obsessed with Sankey diagrams. But when you find a tool that consistently helps you reveal insights and communicate them effectively, why wouldn't you use it? They're not right for every situation, but when they are right, few visualization types can match their combination of clarity, information density, and visual appeal.

If you haven't tried creating a Sankey diagram yet, I encourage you to give it a shot next time you have flow data. You might just join me in my appreciation for these elegant visualizations of complexity.
    `
  }
];
