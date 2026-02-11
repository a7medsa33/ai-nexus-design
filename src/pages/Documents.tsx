import { useState, useEffect } from "react";
import { Plus, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DocumentCard } from "@/components/documents/DocumentCard";
import { Link } from "react-router-dom";

const mockDocuments = [
  { id: "1", title: "Transformer Architecture Deep Dive", excerpt: "A comprehensive analysis of the transformer architecture, including multi-head attention and positional encoding.", size: "2.4 MB", date: "Feb 10", tags: ["AI Research", "NLP"] },
  { id: "2", title: "RAG Pipeline Best Practices", excerpt: "How to build production-ready retrieval-augmented generation pipelines with vector databases.", size: "1.8 MB", date: "Feb 9", tags: ["Engineering", "RAG"] },
  { id: "3", title: "Prompt Engineering Guide", excerpt: "Techniques for crafting effective prompts across different LLM providers and use cases.", size: "956 KB", date: "Feb 8", tags: ["Prompts", "Guide"] },
  { id: "4", title: "LLM Benchmarking Report", excerpt: "Comparing GPT-4, Claude, Gemini across reasoning, coding, and creative tasks.", size: "3.1 MB", date: "Feb 7", tags: ["Benchmarks", "LLMs"] },
  { id: "5", title: "Vector Database Comparison", excerpt: "Pinecone vs Weaviate vs Qdrant — performance, pricing, and feature comparison.", size: "1.2 MB", date: "Feb 5", tags: ["Databases", "Infrastructure"] },
  { id: "6", title: "Fine-Tuning Strategies", excerpt: "When and how to fine-tune models, including LoRA, QLoRA, and full fine-tuning approaches.", size: "2.0 MB", date: "Feb 3", tags: ["Training", "Models"] },
];

const Documents = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mx-auto max-w-6xl space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Documents</h1>
          <p className="text-muted-foreground mt-1">All your knowledge sources</p>
        </div>
        <Button className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:from-indigo-600 hover:to-violet-700 gap-1.5">
          <Plus className="h-4 w-4" />
          New Document
        </Button>
      </div>

      {loading ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <DocumentCard key={i} title="" excerpt="" size="" date="" tags={[]} loading />
          ))}
        </div>
      ) : mockDocuments.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <FileText className="h-16 w-16 text-muted-foreground/40 mb-4" />
          <h2 className="text-xl font-semibold mb-2">No documents yet</h2>
          <p className="text-muted-foreground mb-6 max-w-sm">Upload or create your first document to start building your knowledge base.</p>
          <Button className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:from-indigo-600 hover:to-violet-700 gap-1.5">
            <Plus className="h-4 w-4" />
            New Document
          </Button>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {mockDocuments.map((doc) => (
            <Link key={doc.id} to={`/documents/${doc.id}`}>
              <DocumentCard {...doc} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Documents;
