import React from 'react';
import './Blogs.css';

function BlogsPage() {
    return (
        <>
           <div  className="container">
            <div className="div">Blogs</div>
            
                
                <div className="content">
                    <div className="section">
                        <h2>5 Easy Ways to Eat More Vegetables</h2>
                        <ul>
                            <li data-text="Morning Veggies:">  Morning Veggies: Add spinach or tomatoes to your omelet or smoothie.</li>
                            <li data-text="Smart Snacks:">  Smart Snacks: Keep cut veggies like carrots and cucumbers ready for snacking.</li>
                            <li data-text="Enhance Meals:">  Enhance Meals: Mix vegetables into pasta sauces, soups, and casseroles.</li>
                            <li data-text="Exciting Salads:">  Exciting Salads: Experiment with different greens, toppings, and dressings.</li>
                            <li data-text="Meatless Mondays:">  Meatless Mondays: Go meat-free once a week to focus on vegetable-based meals.</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>Stay Hydrated with These Simple Tips</h2>
                        <ul>
                            <li data-text="Boosts Performance:">  Boosts Performance: Proper hydration improves strength and endurance.</li>
                            <li data-text="Supports Brain Function:">  Supports Brain Function: Water keeps your mind sharp and focused.</li>
                            <li data-text="Aids Digestion:">  Aids Digestion: Helps prevent constipation and aids digestion.</li>
                            <li data-text="Healthy Skin:">  Healthy Skin: Hydration keeps skin fresh and radiant.</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>Benefits of Regular Exercise and Staying Motivated</h2>
                        <ul>
                            <li data-text="Improves Mental Health:">  Improves Mental Health: Releases endorphins, reducing stress and anxiety.</li>
                            <li data-text="Supports Weight Management:">  Supports Weight Management: Burns calories and builds muscle.</li>
                            <li data-text="Boosts Energy:">  Boosts Energy: Increases stamina and reduces fatigue.</li>
                            <li data-text="Enhances Sleep:">  Enhances Sleep: Helps you fall asleep faster and improves sleep quality.</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>Mindful Eating: Improve Your Eating Habits</h2>
                        <ul>
                            <li data-text="Eat Slowly:">  Eat Slowly: Chew and savor each bite to avoid overeating.</li>
                            <li data-text="Remove Distractions:">  Remove Distractions: Focus on your meal, not the TV or phone.</li>
                            <li data-text="Listen to Your Body:">  Listen to Your Body: Eat when hungry, stop when full.</li>
                            <li data-text="Appreciate Your Food:">  Appreciate Your Food: Enjoy and be grateful for your meal.</li>
                            <li data-text="Control Portions:">  Control Portions: Start with smaller portions and go for seconds if needed.</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2>Tips for Better Sleep Hygiene</h2>
                        <ul>
                            <li data-text="Consistent Schedule:">  Consistent Schedule: Sleep and wake up at the same time daily.</li>
                            <li data-text="Relaxing Routine:">  Relaxing Routine: Wind down with reading or a warm bath.</li>
                            <li data-text="Sleep Sanctuary:">  Sleep Sanctuary: Keep your bedroom cool, dark, and quiet.</li>
                            <li data-text="Limit Screen Time:">  Limit Screen Time: Avoid screens at least an hour before bed.</li>
                            <li data-text="Watch Diet:">  Watch Diet: Avoid large meals, caffeine, and alcohol close to bedtime.</li>
                            <li data-text="Stay Active:">  Stay Active: Regular exercise helps you sleep better.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>  
    );
}

export default BlogsPage;
