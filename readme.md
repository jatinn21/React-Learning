<h1>Therorical Things</h1>
<h2>Virtual DOM, Fibre and reconciliation</h2>
<p>
    All About <b><i>createRoot</i></b> method inside <b><i>main.js</i></b>
    <span>Looks like : <i>ReactDOM.createRoot(document.getElementById('root')).render(< App />)</i></span>
    <br>
    <span>createRoot() : This method creates a DOM like structure Behind The Scene, just like the Brower's DOM.<br> Question is Why so?? It does it because to see the difference between both the real DOM of browser and the DOM created by React.js using createRoot method.</span>
</p>
<br>
<p>Now our brower simply repaint the DOM if there is any changes occur in the UI. This is called Page reload. But now React will only make changes which has affected the UI, instead of whole page reload. Skips the reloading part.</p>
<br>
<br>
<br>
<h3>Bugs seen by React Team</h3>
<p>React.js Team Thought sometimes it's not important to immediately update the UI. Because what if the updates or we have made some update call but i want to apply the last call instead of updating UI for each call.</p>
<br>
<p>React Fiber, is a implementation of React.js core algorithm. The goal of React Fiber is to increase the suitability for areas like animation,layout and gestures. Jese ki hume pata hai, React react bht jaldi karta tha so isse uske animations bht hit hote the. As for instance there are 4 updates calls, jese he first wall update hone wala tha, 2nd update call was made, jese he 2nd update karne wale the, wese he 3rd aa gya or fir 4th. so charo ko update karne ki jagha ek final update he karo So here the animation </p>
<p><strong>key Features of Fiber :</strong> Ability to pause, abort or reuse the work as new update comes in; The abilty to assign priorty to different types of updates; <i>(This concept is also called <strong>hyderation</strong>) </i></p>

<p><strong>Hyderation :</strong> Jab bhi aapka DOM paint hota hai, toh firstly aapke buttons and images appear toh ho jate hai but not the ability to click is there because javascript is not ejected at this moment, qki abhi tak sif Web Layout bann gaya hai, js aana baki hai. So when the javascript is ejected, that process is called hyderation. Now the button can be clicked. So using Fiber, This process is done perfectly.</p>
<br>

<p><strong>Reconciliation :</strong> React algorithm that reconsider karti hai ki kisko update karna hai or kisko nhi. So The react algorithm use to differentiate one tree with another, just like Git (purani file or new file mai kya changes hai), to determine which parts need to be changed</p>
(<strong>update</strong>) : <i>A change in the data used to render a React app. Usually the result of setState. Eventually results in a re-render.<i>

<i>Reconciliation</i> is the algorithm behind what popularly understood as the "virtual DOM". A high-level description goes something like this: when you render an react app,
a tree of node that decribes the app is generated and saved in the memory. This tree is then flushed into the rendering environment. Now when the app is updated (usually via setState), a new tree is generated. the new tree is different from the previous one. here we get to know which changes are needed to be done in our application.

Things to note : Different components types are assumed to generate substantially different trees. React will not attempt to differentiate them, but rather replace the old tree completely. In Hindi, Kuch components ko check/compare he mat karo, pura ka pura he replace kardo.
Plus Use keys(unique value) for each lists. bina keys ke react warning dega but agar use karoge toh Fiber list ki performance improve kardega.

(<strong>Key points :</strong>) <i>

- In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, it can drop the frames and degrade the user experience.<br>
- Different types of updates have different priorities - like animation updates need to be completed more quickly than, say, an update from a data store. You can set those priorites as an programmer. But React is also smart enough to handle it like we see in setState.<i>

<hr/>

We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

- pause work and come back to it later.
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed.
