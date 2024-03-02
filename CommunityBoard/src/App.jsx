import './App.css'
import ParentCard from './components/ParentCard'
import mainLogo from './assets/LeetCode_logo_black.png'
const App = () => {

  return (
    <>
      <div className='logo'>
        <img src={mainLogo} alt='Leetcode logo' width={200}></img>
      </div>
      <h1 className='titleContainer'>DSnA Refresher</h1>
      <h2 className='titleContainer'>Data structures and algorithms refresher supplying leet code practice</h2>
      <div className="cardsContainer">
        <ParentCard 
          name='Arrays' 
          description='Array manipulation in data structures and algorithms involves performing various operations on arrays, such as inserting, deleting, searching, sorting, and modifying elements, to efficiently process and organize data.' 
          link1='https://leetcode.com/problems/contains-duplicate/description/'
          link2='https://leetcode.com/problems/two-sum/description/'
          link3='https://leetcode.com/problems/top-k-frequent-elements/description/'
          />

        <ParentCard 
          name='Two Pointers' 
          description='Two pointers in data structures and algorithms refer to using two distinct pointers to traverse or manipulate elements in an array or linked list, often employed in algorithms like the two-pointer technique or sliding window, for optimizing tasks such as searching, sorting, or identifying subarrays with specific properties.' 
          link1='https://leetcode.com/problems/valid-palindrome/description/'
          link2='https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/'
          link3='https://leetcode.com/problems/3sum/description/'
          />

        <ParentCard 
          name='Sliding Window' 
          description='The sliding window is a strategy in algorithms where a window of elements in an array or list is considered. This window moves through the data, and the algorithm efficiently updates the window to solve problems like finding a subarray with a specific property, enhancing performance by avoiding unnecessary recalculations.' 
          link1='https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/'
          link2='https://leetcode.com/problems/longest-substring-without-repeating-characters/description/'
          link3='https://leetcode.com/problems/permutation-in-string/description/'
          />

        <ParentCard 
          name='Stack' 
          description='
          A stack is a data structure that follows the Last In, First Out (LIFO) principle, where elements are added and removed from the same end, typically referred to as the "top." Operations like push (adding an element) and pop (removing the top element) are fundamental, and it is widely used for tasks such as managing function calls in recursion, tracking execution history, and parsing expressions.' 
          link1='https://leetcode.com/problems/valid-parentheses/description/'
          link2='https://leetcode.com/problems/min-stack/description/'
          link3='https://leetcode.com/problems/generate-parentheses/description/'
          />

        
        <ParentCard 
          name='Linked List' 
          description='
          A linked list is a linear data structure consisting of nodes where each node points to the next one in the sequence, forming a chain. Unlike arrays, linked lists do not have a fixed size, and elements can be easily inserted or removed by adjusting pointers, making them dynamic and efficient for certain operations such as insertions and deletions.' 
          link1='https://leetcode.com/problems/merge-two-sorted-lists/description/'
          link2='https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/'
          link3='https://leetcode.com/problems/add-two-numbers/description/'
          />
        <ParentCard 
          name='Trees' 
          description='A tree is a structured arrangement of nodes, where each node contains a value and can have zero or more child nodes, creating a hierarchical structure with a root at the top and leaves at the bottom; it is commonly used in computer science to represent hierarchical relationships and organize data.' 
          link1='https://leetcode.com/problems/invert-binary-tree/description/'
          link2='https://leetcode.com/problems/subtree-of-another-tree/description/'
          link3='https://leetcode.com/problems/validate-binary-search-tree/description/'
          />

        <ParentCard 
          name='Heap' 
          description='
          A heap is a tree-like data structure where each node follows a specific ordering rule with its children, making it efficient for quickly finding and extracting the maximum or minimum value. Heaps are commonly used in tasks like priority queues and sorting algorithms.' 
          link1='https://leetcode.com/problems/kth-largest-element-in-a-stream/description/'
          link2='https://leetcode.com/problems/last-stone-weight/description/'
          link3='https://leetcode.com/problems/task-scheduler/description/'
          />

<ParentCard 
          name='Binary Search' 
          description='
          Binary search is a fast search algorithm that efficiently finds a target value in a sorted collection by repeatedly dividing the search space in half, achieving a logarithmic time complexity.' 
          link1='https://leetcode.com/problems/binary-search/description/'
          link2='https://leetcode.com/problems/search-a-2d-matrix/description/'
          link3='https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/'
          />


        <ParentCard 
          name='Graphs' 
          description='A graph is a data structure with nodes (vertices) and edges that connect pairs of nodes, representing relationships between entities, and is crucial for modeling networks, paths, and dependencies..' 
          link1='https://leetcode.com/problems/number-of-islands/description/'
          link2='https://leetcode.com/problems/max-area-of-island/description/'
          link3='https://leetcode.com/problems/course-schedule/description/'
          />

        <ParentCard 
          name='1-D Dynamic Programming' 
          description='One-dimensional dynamic programming uses an array to store solutions to smaller subproblems, making it efficient for optimizing and solving certain problems incrementally.' 
          link1='https://leetcode.com/problems/climbing-stairs/description/'
          link2='https://leetcode.com/problems/min-cost-climbing-stairs/description/'
          link3='https://leetcode.com/problems/house-robber/description/'
          />
      </div>
    </>
  )
}

export default App
