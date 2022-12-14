<template>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-5">
    <table class="w-full text-sm text-left text-gray-400">
      <thead class="text-x bg-gray-200 text-black">
        <tr>
          <th scope="col" class="py-3 px-6"></th>
          <th scope="col" class="py-3 px-6">Product</th>
          <th scope="col" class="py-3 px-6">Amount</th>
          <th scope="col" class="py-3 px-6">Status</th>
          <th scope="col" class="py-3 px-6">Actions</th>
          <th scope="col" class="py-3 px-6">Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-black">
          <th scope="row" class="py-4 px-6" id="thumbnail">
            <img
              src="https://ralndywgenzrlxupkiap.supabase.co/storage/v1/object/sign/imageurl/i5_12400f.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXVybC9pNV8xMjQwMGYud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MDU4MDQ5MiwiZXhwIjoxOTg1OTQwNDkyfQ.OStkjJLmoA757EwpfNM9pQD6OagWR6ixWK3d9YmZexQ"
              alt="thumbnail"
              class="h-14"
            />
          </th>
          <th scope="row" class="py-4 px-6 font-medium" id="product_name">
            Apple MacBook Pro 17"
          </th>
          <td class="py-4 px-6" id="amount">$10</td>
          <td class="py-4 px-6">
            <span
              class="text-xs mr-2 px-2.5 py-0.5 rounded bg-green-600 text-white font-bold"
              >Green</span
            >
          </td>
          <td class="py-4 px-6">
            <button
              type="button"
              aria-label="add_to_cart_button"
              class="bg-[#0aad0a] px-2 py-1 rounded-md hover:bg-green-600 text-center text-white text-sm"
            >
              Add to Cart
            </button>
          </td>
          <td class="py-4 px-6">
            <span class="text-black/50" title="Remove">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
