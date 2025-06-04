<template>
  <div class="bg-primary-light text-neutral-dark">
    <!-- 區塊 1：網站理念簡介 -->
    <section class="container mx-auto py-12 px-6 flex flex-col md:flex-row items-center gap-8">
      <div class="w-1/3 max-h-[500px]">
        <img
          src="https://i.pinimg.com/736x/dd/8b/c0/dd8bc0bef4f62be979001a993cb2873f.jpg"
          alt="拼圖理念"
          class="w-1/2 md:w-full rounded-lg shadow-lg object-cover"
        />
      </div>
      <div class="md:w-2/3">
        <h2 class="text-3xl font-bold text-primary-dark mb-4">為什麼我們建立這個平台？</h2>
        <p class="text-lg leading-relaxed">
          拼圖價格昂貴、完成後難以保存，對許多玩家來說是一大困擾。我們希望打造一個平台，
          讓拼圖愛好者可以分享資源，藉由二手買賣與租借，讓每塊拼圖發揮更多價值。
        </p>
      </div>
    </section>

    <!-- 區塊 2：我們提供的服務 -->
    <section class="container mx-auto py-12 px-6 text-center">
      <h2 class="text-3xl font-bold text-secondary-dark mb-6">我們提供的服務</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <img
            src="https://i.pinimg.com/736x/d2/06/30/d20630dcb140d435fec37d3e317cfa46.jpg"
            alt="二手拼圖"
            class="w-full h-48 object-cover rounded mb-4"
          />
          <h3 class="text-xl font-semibold text-primary-dark">二手拼圖買賣</h3>
          <p class="text-neutral-dark mt-2">
            提供平台讓玩家出售已完成的拼圖，其他人也能以實惠價格購買新的圖案，資源循環再利用。
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
          <img
            src="https://i.pinimg.com/736x/8b/30/ab/8b30abc642209f2e9aae8e469dc3dc40.jpg"
            alt="拼圖租借"
            class="w-full h-48 object-cover rounded mb-4"
          />
          <h3 class="text-xl font-semibold text-primary-dark">拼圖租借服務</h3>
          <p class="text-neutral-dark mt-2">
            不一定要擁有一整盒拼圖，也可以短期租借，適合初學者或偶爾拼拼圖放鬆的人群。
          </p>
        </div>
      </div>
    </section>

    <!-- 區塊 3：使用我們的好處 -->
    <section class="container mx-auto py-12 px-6 bg-accent-light rounded-lg">
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-accent-dark">使用我們平台的好處</h2>
      </div>
      <ul class="grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-dark">
        <li class="bg-white p-6 rounded shadow">
          💰 <span class="font-semibold">節省成本</span>：以更低價格獲得新挑戰。
        </li>
        <li class="bg-white p-6 rounded shadow">
          ♻️ <span class="font-semibold">資源再利用</span>：拼圖不再只是一次性的玩具。
        </li>
        <li class="bg-white p-6 rounded shadow">
          🧩 <span class="font-semibold">拼圖交流社群</span>：分享心得與圖案，連結同好。
        </li>
      </ul>
    </section>

    <!-- 區塊 4：我們的願景與未來 -->
    <section class="container mx-auto py-12 px-6 flex flex-col md:flex-row items-center gap-8">
      <div class="md:w-1/2">
        <h2 class="text-3xl font-bold text-secondary-dark mb-4">我們的願景</h2>
        <p class="text-lg leading-relaxed">
          我們希望透過這個平台，建立一個永續的拼圖文化社群，讓每一塊拼圖都能發揮價值，
          也讓更多人輕鬆進入拼圖的世界。
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1627844540587-6d6fa16ab7cf"
        alt="拼圖願景"
        class="w-full md:w-1/2 rounded-lg shadow-lg"
      />
    </section>
  </div>
</template>

<script setup>
// 無邏輯，純靜態頁面
</script>
