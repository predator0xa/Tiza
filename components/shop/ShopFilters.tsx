"use client";

type Props = {
  category: string;
  setCategory: (value: string) => void;

  collection: string;
  setCollection: (value: string) => void;

  sort: string;
  setSort: (value: string) => void;
};

export default function ShopFilters({
  category,
  setCategory,
  collection,
  setCollection,
  sort,
  setSort,
}: Props) {
  return (
    <aside className="space-y-8 rounded-3xl border p-6 lg:sticky lg:top-28">
      <div>
        <h3 className="mb-3 font-medium">
          Category
        </h3>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-xl border p-3"
        >
          <option value="all">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
        </select>
      </div>

      <div>
        <h3 className="mb-3 font-medium">
          Collection
        </h3>

        <select
          value={collection}
          onChange={(e) => setCollection(e.target.value)}
          className="w-full rounded-xl border p-3"
        >
          <option value="all">All</option>
          <option value="new">New</option>
          <option value="essentials">Essentials</option>
          <option value="summer">Summer</option>
          <option value="winter">Winter</option>
        </select>
      </div>

      <div>
        <h3 className="mb-3 font-medium">
          Sort By
        </h3>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full rounded-xl border p-3"
        >
          <option value="featured">Featured</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
          <option value="az">Name: A → Z</option>
        </select>
      </div>
    </aside>
  );
}