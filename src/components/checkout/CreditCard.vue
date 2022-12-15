<template>
  <div
    id="credit_card"
    class="border border-gray-300 rounded-md min-h-[10em] mt-2 p-5"
  >
    <p class="ml-2 text-sm font-medium">Credit / Debit Card</p>
    <p class="ml-2 text-[12px] text-black/70 mt-2">
      Safe money transfer using your bank accou k account. We support Mastercard
      tercard, Visa, Discover and Stripe.
    </p>
    <div id="card_number" class="mt-3 grid gap-2">
      <label
        for="card_number"
        class="font-medium ml-2 text-[16px] text-black/70"
        >Card Number</label
      >
      <input
        type="number"
        name="card_number"
        class="border border-gray-300 rounded-md py-1 focus:outline-none focus:ring focus:ring-green-300 focus:transition focus:duration-300 pl-5 text-sm text-black/70"
      />
    </div>
    <div class="grid gap-1 md:grid-cols-4 mt-5">
      <div class="md:col-span-2">
        <p class="font-medium text-[16px] text-black/70">Name on card</p>
        <input
          type="text"
          placeholder="Enter your first name"
          class="border border-gray-300 rounded-md min-h-[2em] pl-5 placeholder:text-sm focus:outline-none focus:ring focus:ring-green-300 focus:transition focus:duration-300 text-sm text-black/70 mt-2 w-full"
        />
      </div>
      <div>
        <p class="font-medium text-[16px] text-black/70">Expire date</p>
        <input
          type="text"
          placeholder="Expire date"
          class="border border-gray-300 rounded-md min-h-[2em] pl-5 placeholder:text-sm focus:outline-none focus:ring focus:ring-green-300 focus:transition focus:duration-300 text-sm text-black/70 mt-2 w-full md:w-32"
        />
      </div>
      <div>
        <p class="font-medium text-[16px] text-black/70">CVV code</p>
        <input
          type="password"
          placeholder="**"
          class="border border-gray-300 rounded-md min-h-[2em] pl-5 placeholder:text-sm focus:outline-none focus:ring focus:ring-green-300 focus:transition focus:duration-300 text-sm text-black/70 mt-2 w-full md:w-24"
        />
      </div>
    </div>
  </div>
</template>
