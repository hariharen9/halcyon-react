
import './App.css';

function App() {
  return (
    
    <div>
      <center>

    <h1 className="text-3xl font-bold underline  my-16">
      Hello world!
    </h1>
      </center>




    <div class="mockup-window bg-base-300 mx-16">
  <div class="flex justify-center px-4 py-16 bg-base-200">
        Hello!
      </div>
</div>


<center>
<a href="/components/modal#my-modal" class="btn btn-primary  my-16">open modal</a> 
<div id="my-modal" class="modal">
  <div class="modal-box">
    <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p> 
    <div class="modal-action">
      <a href="/components/modal#" class="btn btn-primary">Accept</a> 
      <a href="/components/modal#" class="btn">Close</a>
    </div>
  </div>
</div>
</center>
</div>
  );
}

export default App;
