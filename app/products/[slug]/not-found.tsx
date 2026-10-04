import { Button } from "@/components/ui/Button";
export default function NotFound() {
  return <div className="container-x py-24 text-center"><h1 className="h-display text-4xl">Product not found</h1><p className="mt-3 text-muted">It may have been removed or renamed.</p><Button href="/products" className="mt-6">Back to products</Button></div>;
}
